import { useEffect, useState } from "react";
import axios from "axios";

// model
import { CardProps } from "../model/model_card";

export const useGetListCards = () => {
  const [listCards, setListCards] = useState<CardProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_API_KEY
        }&start_date=2024-01-01&end_date=2024-01-31`
      );
      if (response.status === 200) {
        console.log(response.data);
        setListCards(response.data);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { listCards };
};
