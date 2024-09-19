import { useState } from "react";
import { useNavigate } from "react-router-dom";

// mui
import { Box, Button } from "@mui/material";

// model
import { CardProps } from "../model/model_card";

// icon + image
import LogoutIcon from "@mui/icons-material/Logout";
import NasaLogo from "../assets/NASA.svg";

// components
import { StyledTextField } from "./UI/Textfield";

const SideBAr: React.FC<{
  setListCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
  originalListCards: CardProps[];
}> = ({ setListCards, originalListCards }) => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
    if (searchValue === "") {
      setListCards(originalListCards);
    } else {
      const arrayFilter = originalListCards.filter((card) =>
        card.title.includes(searchValue)
      );
      setListCards(arrayFilter);
    }
  };

  return (
    <Box
      sx={{
        width: "20vw",
        height: "calc(100vh - 8vh)",
        padding: "4vh 0",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "#2b3848;",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src={NasaLogo}
          alt="Nasa Logo"
          style={{ width: "200px", height: "200px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "10vh",
        }}
      >
        <StyledTextField
          label="Recherche"
          variant="outlined"
          fullWidth
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        endIcon={<LogoutIcon />}
        onClick={() => navigate("/login")}
      >
        Deconnexion
      </Button>
    </Box>
  );
};

export default SideBAr;
