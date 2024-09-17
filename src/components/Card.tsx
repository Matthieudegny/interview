import React from "react";
import { useNavigate } from "react-router-dom";

// model
import { CardProps } from "../model/model_card";

const Card: React.FC<CardProps> = ({ title, date, explanation, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${date}`); // Navigate to a route with the date as a parameter
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{date}</p>
      <img src={url} alt={title} style={{ width: "100%", height: "auto" }} />
      <p>{explanation}</p>
    </div>
  );
};

export default Card;
