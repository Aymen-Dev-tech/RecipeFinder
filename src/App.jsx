import { Routes, Route } from "react-router-dom";
import RecipeSearch from "./pages/RecipeSearch";
import Instractions from "./pages/Instructions";
import Landing from "./pages/Landing";
import { LoadingProvider } from "./context/loadingContext";

function App() {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<RecipeSearch />} />
        <Route path="/instructions" element={<Instractions />} />
      </Routes>
    </LoadingProvider>
  );
}

export default App;
