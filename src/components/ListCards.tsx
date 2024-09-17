import React from "react";
import { useGetListCards } from "../hooks/useGetListCards";

import Card from "./Card";
import { Skeleton } from "@mui/material";

const ListCards: React.FC = () => {
  const { listCards, loading } = useGetListCards();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "calc(100vw - 5vh)",
        gap: "3vh",
        padding: "3vh 0vh 3vh 3vh",
      }}
    >
      {loading
        ? Array.from({ length: 9 }).map((_) => (
            <Skeleton
              variant="rectangular"
              width={"30.6vw"}
              height={"50vh"}
              style={{ borderRadius: "8px" }}
            />
          ))
        : listCards?.map((card) => (
            <Card
              key={card.date}
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
