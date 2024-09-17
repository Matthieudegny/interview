import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import ListCards from "./components/ListCards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-cards" element={<ListCards />} />
      </Routes>
    </Router>
  );
}

export default App;
