import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import ListCards from "./components/ListCards";
import CardDetails from "./components/CardDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-cards" element={<ListCards />} />
        <Route path="/details/:date" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
