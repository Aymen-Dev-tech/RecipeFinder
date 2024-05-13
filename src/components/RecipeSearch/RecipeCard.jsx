import { useNavigate } from "react-router-dom";

const RecipeCard = ({ uri, imgSrc, title, enrg, time, ingr }) => {
  const navigate = useNavigate();
  const handelCardClick = () => {
    navigate("/instructions", { state: { uri } });
  };
  return (
    <div
      className="flex h-[300px] w-[285px] flex-col items-center  justify-center gap-2 rounded-2xl bg-[#E7DDDA] transition-[0.1s] hover:rounded-2xl hover:border-2 hover:border-[#2FB538]"
      onClick={handelCardClick}
    >
      <div className="mb-2 rounded-t-2xl">
        <img
          alt="recipe"
          src={imgSrc}
          width="300"
          height="300"
          className="  h-[200px] w-[285px] rounded-t-2xl object-cover"
        />
      </div>
      <div className="flex h-[200px] w-[200px] content-center justify-center ">
        <p className=" max-w-full overflow-hidden whitespace-nowrap text-center  font-bold text-[#2FB538] ">
          {title}
        </p>
      </div>
      <div className=" mb-3 mt-[-40px] flex h-[37.25px] w-[233.5px] flex-row justify-around">
        <div className="flex h-[36.44px] flex-col items-center  justify-center gap-[2.7px]">
          <img
            alt="flame"
            src="/icons/fire.svg"
            width="24"
            height="24"
            className=" h-[32px] w-[32px] object-cover"
          />
          <p className="text-center text-[12.1814px] font-bold leading-[12px] text-[#7B6660]">
            {enrg}
          </p>
        </div>
        <div className="flex h-[36.44px] flex-col  items-center justify-center gap-[2.7px]">
          <img
            alt="dish"
            src="/icons/dish.svg"
            width="24"
            height="24"
            className=" h-[32px] w-[32px] object-cover"
          />
          <p className="text-center text-[12.1814px] font-bold leading-[12px] text-[#7B6660]">
            {time}
          </p>
        </div>
        <div className="flex h-[36.44px] flex-col  items-center justify-center gap-[2.7px]">
          <img
            alt="ingre"
            src="/icons/ingredients.svg"
            width="24"
            height="24"
            className=" h-[32px] w-[32px] object-cover"
          />
          <p className=" text-center text-[12.1814px] font-bold leading-[12px] text-[#7B6660]">
            {ingr}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
