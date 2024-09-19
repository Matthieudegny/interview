import React from "react";
import { Skeleton, Box } from "@mui/material";

// model
import { CardProps } from "../model/model_card";

// components
import NasaCard from "./Card";

const ListCards: React.FC<{
  listCards: CardProps[];
  loading: boolean;
}> = ({ listCards, loading }) => {
  return (
    <Box
      style={{
        // rappel sidebar width 20vw
        width: "calc(80vw - 4vh)",
        height: "calc(100vh - 4vh)",
        marginLeft: "20vw",
        overflowY: "auto",
        padding: "2vh",
        display: "flex",
        flexWrap: "wrap",
        gap: "2vh",
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
            <NasaCard
              key={card.id}
              id={card.id}
              title={card.title}
              explanation={card.explanation}
              url={card.url}
            />
          ))}
    </Box>
  );
};

export default ListCards;
