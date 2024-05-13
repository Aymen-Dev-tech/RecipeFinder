// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
// import fetchData from "../utils/fetchData";
import InstructionsCard from "../components/Instructions/InstructionsCard";

import useData from "../hooks/useData";
import useLoading from "../hooks/useLoading";
const Instractions = () => {
  const { state } = useLocation();
  const { uri } = state;
  const { isLoading } = useLoading();
  const baseUrl = "https://api.edamam.com/api/recipes/v2/by-uri?";
  const data = useData(undefined, undefined, uri, baseUrl);
  const recipeDetails = data && data[0].recipe;
  return (
    <div className="flex h-screen w-screen flex-wrap  items-center justify-center bg-[#F3F0EF]">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <InstructionsCard recipe={recipeDetails} />
      )}
    </div>
  );
};

export default Instractions;
