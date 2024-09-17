import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import MuiCard from "@mui/material/Card";

// model
import { CardProps } from "../model/model_card";

const Card: React.FC<CardProps> = ({ title, date, explanation, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${date}`);
  };

  return (
    <Box>
      <MuiCard
        onClick={handleClick}
        style={{
          cursor: "pointer",
          width: "30.6vw",
          maxHeight: "50vh",
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
          {/* <Typography variant="body1" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2">{explanation}</Typography> */}
        </CardContent>
      </MuiCard>
    </Box>
  );
};

export default Card;
