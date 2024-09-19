import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// image
import background from "../assets/Atom main.jpg";

// components
import { StyledTextField } from "./UI/Textfield";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      credentials.name === "digitalism" &&
      credentials.password === "digitalism"
    ) {
      setError("");
      // je redirige vers la page list-cards
      navigate("/list-cards");
    } else {
      setError("Identifiant ou mot de passe incorrect");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "1rem",
          width: "20vw",
          backgroundColor: "#22262b",
        }}
        onSubmit={handleSubmit}
      >
        <StyledTextField
          id="name"
          name="name"
          label="Identifiant"
          type="text"
          autoFocus
          value={credentials.name}
          onChange={handleChange}
          autoComplete="off"
        />

        <StyledTextField
          id="password"
          name="password"
          label="Mot de passe"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          autoComplete="off"
        />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "50%" }}
          >
            Login
          </Button>
        </Box>
        {error && <p>{error}</p>}
      </form>
    </Box>
  );
}

export default Login;
