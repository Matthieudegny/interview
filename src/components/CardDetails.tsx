import React from "react";
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
import { useGetListCards } from "../hooks/useGetListCards"; // Adjust the import based on your structure
import { useNavigate } from "react-router-dom";
const CardDetails: React.FC = () => {
  const navigate = useNavigate();
  const { date } = useParams<{ date: string }>();
  const { listCards, loading } = useGetListCards(); // Assuming this hook returns the list of cards

  // Find the card that matches the date
  const card = listCards.find((card) => card.date === date);

  console.log("card", card);

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
          top: "10px",
          right: "10px",
        }}
      >
        Return to List
      </Button>
      <Card style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
        <CardMedia
          component="img"
          image={card.url}
          alt={card.title}
          style={{ width: "40%", objectFit: "cover" }} // Image on the left
        />
        <CardContent style={{ width: "60%" }}>
          <Typography variant="h5">{card.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {card.date}
          </Typography>
          <Typography variant="body1">{card.explanation}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardDetails;
