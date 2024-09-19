import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Login from "./components/Login";
import MainSectionListCards from "./components/MainSectionListCards";
import CardDetails from "./components/CardDetails";

// hooks
import { useGetListCards } from "./hooks/useGetListCards";

function App() {
  // hook pour récupérer les cartes + l'état de chargement
  const { listCards, loading, setListCards, originalListCards } =
    useGetListCards();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/list-cards"
          element={
            <MainSectionListCards
              listCards={listCards}
              loading={loading}
              setListCards={setListCards}
              originalListCards={originalListCards}
            />
          }
        />
        <Route
          path="/details/:id"
          element={<CardDetails listCards={listCards} loading={loading} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
