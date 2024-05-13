import { useState } from "react";

import DietTabGroup from "../components/RecipeSearch/DietTabGroup";
import { SearchBox } from "../components/RecipeSearch/SearchBox";
import { DietTab } from "../components/RecipeSearch/DietTab";
import RecipeCard from "../components/RecipeSearch/RecipeCard";
import Pagination from "../components/RecipeSearch/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import useData from "../hooks/useData";
import useLoading from "../hooks/useLoading";
const RecipeSearch = () => {
  const diets = [
    { lable: "Balanced", type: "balanced" },
    { lable: "High protein", type: "high-protein" },
    { lable: "High fiber", type: "high-fiber" },
    { lable: "Low fat", type: "low-fat" },
  ];
  //search box state
  const [value, setValue] = useState("");
  //Diet type tabs state
  const [dietType, setDietType] = useState("balanced");
  const dietTabs = diets.map((diet) => {
    return (
      <DietTab
        key={diet.lable}
        label={diet.lable}
        dietType={dietType}
        onClick={() => setDietType(diet.type)}
      />
    );
  });
  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const baseUrl = "https://api.edamam.com/api/recipes/v2?";
  const { isLoading } = useLoading();
  const data = useData(value.toLowerCase(), dietType, undefined, baseUrl);
  const recipes = data;
  const recipePerPage = 12;
  //define ranges
  const lastRecipeIndex = currentPage * recipePerPage;
  const firstRecipeIndex = lastRecipeIndex - recipePerPage;
  const currentRecipesList = recipes?.slice(firstRecipeIndex, lastRecipeIndex);
  return (
    <div className="h-full w-screen bg-[#F3F0EF]">
      <div className="flex h-full min-h-screen flex-col justify-center gap-[40px] ">
        <SearchBox value={value} setValue={(e) => setValue(e.target.value)} />
        <DietTabGroup dietTabs={dietTabs} />
        {isLoading ? (
          <LoadingSpinner />
        ) : recipes?.length === 0 ? (
          <>
            <div className="m-auto h-[500px] w-[500px]">
              <img alt="no result" src="/icons/no-result.svg" />
            </div>
          </>
        ) : (
          <>
            <div className="m-auto flex max-w-[1280px] flex-wrap justify-center gap-10">
              {currentRecipesList?.map((recipe, index) => {
                return (
                  <RecipeCard
                    key={index}
                    uri={recipe.recipe.uri}
                    imgSrc={recipe.recipe.image}
                    title={recipe.recipe.label}
                    enrg={
                      Math.round(recipe.recipe.calories).toString() + " Cal"
                    }
                    time={recipe.recipe.totalTime.toString() + " Min"}
                    ingr={
                      recipe.recipe.ingredients.length.toString() + " Ingre"
                    }
                  />
                );
              })}
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              recipesLength={
                recipes && Math.ceil(recipes.length / recipePerPage)
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;
