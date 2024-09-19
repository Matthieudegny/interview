import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

// model
import { CardProps } from "../model/model_card";

const NasaCard: React.FC<CardProps> = ({ id, title, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        width: "calc(33% - 1vh)",
        minWidth: "380px",
        maxHeight: "50vh",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        backgroundColor: "rgb(18, 18, 18)",
        color: "white",
      }}
    >
      <CardActionArea sx={{ height: "100%", width: "100%" }}>
        <CardMedia
          sx={{
            height: "70%",
            maxHeight: "70%",
            minHeight: "70%",
          }}
          component="img"
          image={url}
          alt={title}
        />
        <CardContent
          sx={{
            height: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NasaCard;
