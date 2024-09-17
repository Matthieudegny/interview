import { useEffect, useState } from "react";
import axios from "axios";

// model
import { CardProps } from "../model/model_card";

// je vérifie que l'url est une image, et que le lien est correct
const isValidImageUrl = async (url: string): Promise<boolean> => {
  return /\.(jpg|jpeg|png|gif)$/.test(url);
};

export const useGetListCards = () => {
  const [listCards, setListCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // {{ edit_1 }}

  const fetchData = async () => {
    setLoading(true); // {{ edit_2 }}
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_API_KEY
        }&start_date=2024-01-01&end_date=2024-01-31`
      );
      if (response.status === 200) {
        console.log(response.data);

        // check validation image url
        const validCards = await Promise.all(
          response.data.map(async (card: CardProps) => {
            const isValid = await isValidImageUrl(card.url);
            return isValid ? card : null;
          })
        );

        setListCards(validCards.filter(Boolean) as CardProps[]);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // {{ edit_3 }}
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { listCards, loading }; // {{ edit_4 }}
};
