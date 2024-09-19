import { useEffect, useState } from "react";
import axios from "axios";

// model
import { CardProps, ResponseDataType } from "../model/model_card";

// je vérifie que l'url est une image, et que le lien est correct
const isValidImageUrl = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif)$/.test(url);
};

export const useGetListCards = () => {
  const [originalListCards, setoriginalListCards] = useState<CardProps[]>([]);
  const [listCards, setListCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // je évrifie si le titre contien un f
    const titlecontainf = originalListCards.map((card) => {
      if (card.title.includes("f")) {
        return card;
      }
    });
    console.log("titlecontainf", titlecontainf);
  }, [originalListCards]);

  useEffect(() => {
    console.log("listCards", listCards);
  }, [listCards]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_API_KEY
        }&start_date=2024-01-01&end_date=2024-01-31`
      );
      if (response.status === 200) {
        console.log(response.data);

        // je boucle dans response.data
        // pour vérifier si le lien de l'image ets correct
        // pour consruire un nouveau tableau dobjet CardProps avec un id auto increment
        let validCards = response.data.map(
          (card: ResponseDataType, index: number) => {
            if (isValidImageUrl(card.url)) {
              return {
                ...card,
                id: index + 1,
              } as CardProps;
            }
          }
        );

        validCards = validCards.filter(
          (card: CardProps | undefined) => card !== undefined
        ) as CardProps[];

        setoriginalListCards(validCards);
        setListCards(validCards);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { listCards, loading, setListCards, originalListCards };
};
