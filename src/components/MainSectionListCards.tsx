import React from "react";

// mui
import { Box } from "@mui/material";

// components
import SideBAr from "./SideBAr";
import ListCards from "./ListCards";

// model
import { CardProps } from "../model/model_card";

const MainSectionListCards: React.FC<{
  listCards: CardProps[];
  loading: boolean;
  setListCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
  originalListCards: CardProps[];
}> = ({ listCards, loading, setListCards, originalListCards }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <SideBAr
        setListCards={setListCards}
        originalListCards={originalListCards}
      />
      <ListCards listCards={listCards} loading={loading} />
    </Box>
  );
};

export default MainSectionListCards;
