import Navbar from "../components/Landing/Navbar";
import RecipeCard from "../components/RecipeSearch/RecipeCard";
import useLoading from "../hooks/useLoading";
import useData from "../hooks/useData";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Landing/Footer";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  const { isLoading } = useLoading();
  const baseUrl = "https://api.edamam.com/api/recipes/v2?";
  const data = useData(undefined, undefined, undefined, baseUrl);
  const recipes = data?.slice(10, 18);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="m-auto flex  w-screen flex-1 flex-col gap-28 bg-gradient-to-l from-[#ccfcce4e] to-[#ccfcce] pb-4 max-[360px]:gap-38 max-[360px]:pb-6 min-[1920px]:min-h-screen">
        <Navbar />
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex w-[800px] flex-col items-start justify-center gap-[10px] px-8 py-0 max-[1536px]:items-center">
            <p className=" break-words text-[70px] font-bold  leading-[75px] text-[#52423D] max-[1536px]:text-center max-[540px]:text-4xl max-[540px]:text-[28px] max-[540px]:font-bold">
              Cooking Made Fun and Easy: Unleash Your Inner Chef
            </p>
            <div className="w-[450px] max-[530px]:w-full ">
              <p className="break-words font-light text-[#7F7D7D] max-[1536px]:text-center">
                Discover more than
                <span className="text-[#34CF3D]"> 10,000 recipes </span> in your
                hand with the best recipe. Help you to find the easiest way to
                cook
              </p>
            </div>

            <button
              onClick={() => navigate("/search")}
              className="mt-7 h-[65px] w-[209px] rounded-2xl bg-[#34CF3D] text-xl font-bold text-[#CCFCCE] hover:bg-[#095E0E] active:bg-yellow-300 active:text-black "
            >
              Explor Recipes
            </button>
          </div>
          <div className=" hidden min-h-[400px] min-w-[340px] 2xl:block ">
            <img alt="hero-image" src="/figures/hero-image.svg" />
          </div>
        </div>
      </div>
      <div className="flex w-screen flex-1 flex-col  bg-[#F3F0EF] py-6 min-[660px]:gap-5 md:px-10 2xl:px-60 min-[1920px]:min-h-screen ">
        <div className="flex flex-wrap justify-between max-[658px]:gap-10">
          <div className="flex w-[580px] flex-col gap-1 max-[658px]:m-auto">
            <p className="text-base font-bold text-[#52423D] max-[658px]:text-center xl:text-xl">
              Discover a list of popular recipes a cross the global
            </p>
            <p className="text-sm font-light text-[#A18D87] max-[658px]:text-center xl:text-lg ">
              Check our most popular recipes of this week
            </p>
          </div>
          <button
            onClick={() => navigate("/search")}
            className="h-[52px] w-[110px] rounded-2xl bg-[#34CF3D] font-bold text-[#CCFCCE] hover:bg-[#095E0E] active:bg-yellow-300 active:text-black max-[658px]:m-auto max-[658px]:mb-4 xl:h-[55px] xl:w-[150px] xl:text-[20px] xl:font-bold xl:leading-[24px]"
          >
            See All
          </button>
        </div>
        <div className="m-auto flex flex-wrap justify-center gap-24 ">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            recipes?.map((recipe, index) => {
              return (
                <RecipeCard
                  key={index}
                  uri={recipe.recipe.uri}
                  imgSrc={recipe.recipe.image}
                  title={recipe.recipe.label}
                  enrg={Math.round(recipe.recipe.calories).toString() + " Cal"}
                  time={recipe.recipe.totalTime.toString() + " Min"}
                  ingr={recipe.recipe.ingredients.length.toString() + " Ingre"}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="flex w-screen flex-1 flex-wrap  justify-center  gap-28 bg-gradient-to-r  from-[#ccfcce4e] to-[#ccfcce] py-44 max-[1310px]:flex-col-reverse max-[1310px]:items-center max-[1310px]:gap-20 max-[1310px]:px-1 min-[1920px]:min-h-screen">
        <div className=" pb-6 max-[610px]:h-[360px] max-[610px]:w-[260px] lg:h-[620px] lg:w-[600px] ">
          <img
            alt="plate"
            src="/figures/plate.svg"
            className="h-[640px] w-[480px] object-cover max-[610px]:h-[340px] max-[610px]:w-[260px] "
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <p className="text-[46px] font-bold text-[#52423D] max-[1310px]:text-center max-[610px]:text-lg">
            Each recipe holds a secret
          </p>
          <div className=" w-[560px] max-[610px]:w-[240px]">
            <p className="break-words text-[24px] text-[#A18D87] max-[1310px]:text-center max-[610px]:text-sm">
              Get a detailed list of ingredients with quantities and nutritional
              values for each recipe
            </p>
          </div>
        </div>
      </div>
      <div className=" flex min-h-screen w-screen flex-1 items-center justify-center bg-[url('/figures/cta-bg.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className="flex h-[240px] w-[280px] flex-col items-center  justify-center gap-10 rounded-2xl  bg-white shadow-2xl md:h-[380px] md:w-[600px] md:gap-16">
          <div className="w-[240px] md:w-[380px]">
            <p className="break-words text-center text-xs text-[#52423D] md:text-lg">
              Explore our array of mouthwatering recipes and elevate your
              culinary skills today! Dive into detailed ingredients,
              step-by-step instructions, and unleash your inner chef with every
              dish.
            </p>
          </div>
          <button
            onClick={() => navigate("/search")}
            className=" h-[42px] w-[120px] rounded-2xl bg-[#34CF3D] text-sm font-bold text-[#CCFCCE] hover:bg-[#095E0E] active:bg-yellow-300 active:text-black md:h-[54px] md:w-[180px] md:text-lg "
          >
            Start now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
