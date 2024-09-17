import React from "react";
import { useGetListCards } from "../hooks/useGetListCards";

import Card from "./Card";

const ListCards: React.FC = () => {
  const { listCards } = useGetListCards();

  return (
    <div>
      {listCards?.map((card) => (
        <Card
          key={card.date} // Use a unique key, here we use the date
          title={card.title}
          date={card.date}
          explanation={card.explanation}
          url={card.url}
        />
      ))}
    </div>
  );
};

export default ListCards;
