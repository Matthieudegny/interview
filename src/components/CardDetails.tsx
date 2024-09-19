import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";

// model
import { CardProps } from "../model/model_card";

const CardDetails: React.FC<{
  listCards: CardProps[];
  loading: boolean;
}> = ({ listCards, loading }) => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Typography variant="h6">Card not found</Typography>;
  }

  //  je récupère la card qui correspond à la date
  const card = listCards.find((card) => card.id === parseInt(id));

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <CircularProgress size={50} />
      </Box>
    );
  }

  if (!card) {
    return <Typography variant="h6">Card not found</Typography>;
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={() => navigate("/list-cards")}
        sx={{
          position: "absolute",
          top: "2vh",
          right: "2vh",
        }}
      >
        Retour à la liste
      </Button>
      <Card
        sx={{
          width: "85vw",
          backgroundColor: "rgb(18, 18, 18)",
          color: "white",
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "2vh",
            padding: "2vh",
          }}
        >
          <CardMedia
            component="img"
            image={card.url}
            alt={card.title}
            style={{ width: "40%", objectFit: "cover" }}
          />
          <CardContent style={{ width: "calc(60% - 2vh)" }}>
            <Typography variant="h4">{card.title}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {card.date}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                lineHeight: "2.5rem",
              }}
            >
              {card.explanation}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardDetails;
