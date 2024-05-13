const InstructionsCard = ({ recipe }) => {
  return (
    <div className="flex  min-w-[360px] max-w-[1600px] flex-row  flex-wrap items-center justify-center  rounded-2xl border bg-[#E7DDDA] py-6">
      <div className="blg:w-[360px] ml-8 flex w-[280px]  flex-col justify-center gap-[20px]">
        <p className="break-words text-lg font-bold text-[#34CF3D] lg:text-[24px] lg:leading-[24px] ">
          Ingredients:
        </p>
        {recipe?.ingredients?.map((ingredient, index) => {
          return (
            <p
              key={index}
              className="break-words font-normal text-[#7B6660] lg:text-[20px] lg:leading-7"
            >
              {(index + 1).toString() + ". " + ingredient.text}
            </p>
          );
        })}
      </div>

      <div className="flex h-[745px] w-[320px] flex-col flex-wrap items-center justify-evenly md:w-[680px] ">
        <p className=" break-words text-center text-xl font-bold text-[#34CF3D] lg:text-[33px] lg:leading-[33px]">
          {recipe?.label}
        </p>
        <div>
          <img
            alt="recipe"
            src={recipe?.image}
            width="300"
            height="300"
            className="border-style box-border w-full border-[1.5px] border-[#7B6660] object-cover shadow-md max-[540px]:h-[200px] max-[540px]:w-[200px]"
          />
        </div>
        <div className="flex w-full flex-row flex-wrap justify-center gap-14 ">
          <p className="text-[16px] font-normal leading-[16px] text-[#7B6660]">
            <span className="text-[16px] font-normal leading-[16px] text-[#34CF3D]">
              Cuisine:
            </span>
            {recipe?.cuisineType?.map((cuisine, index) => {
              return <span key={index}> {cuisine} </span>;
            })}
          </p>
          <p className="text-[16px] font-normal leading-[16px] text-[#7B6660]">
            <span className="text-[16px] font-normal leading-[16px] text-[#34CF3D]">
              Meal Type:
            </span>
            {recipe?.mealType?.map((meal, index) => {
              return <span key={index}> {meal} </span>;
            })}
          </p>
          <p className="text-[16px] font-normal leading-[16px] text-[#7B6660]">
            <span className="text-[16px] font-normal leading-[16px] text-[#34CF3D]">
              Dish Type:
            </span>
            {recipe?.dishType?.map((dish, index) => {
              return <span key={index}> {dish} </span>;
            })}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col content-center justify-center gap-[53px]">
        <div className="flex w-[320px] flex-row justify-center gap-[12px]">
          <img alt="energy" src="/icons/fire-large.svg" />
          <div className="flex flex-col justify-center gap-3">
            <div className="w-[140px]">
              <p className="text-[16px] font-normal leading-[16px] text-[#34CF3D]">
                Energy
              </p>
            </div>

            <p className="text-[16px] font-bold leading-[16px] text-[#7B6660]">
              {recipe && Math.round(recipe.calories).toString() + " Cal"}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[12px]">
          <img alt="energy" src="/icons/dish-large.svg" />
          <div className="flex flex-col justify-center gap-3">
            <div className="w-[140px]">
              <p className="text-[16px] font-normal leading-[16px] text-[#34CF3D]">
                Total Time
              </p>
            </div>

            <p className="text-[16px] font-bold leading-[16px] text-[#7B6660]">
              {recipe?.totalTime?.toString() + " Min"}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[12px]">
          <img alt="energy" src="/icons/mortar-large.svg" />
          <div className="flex flex-col justify-center gap-3">
            <div className="w-[140px]">
              <p className="text-[16px] font-normal leading-[16px] text-[#34CF3D]">
                Ingredients
              </p>
            </div>

            <p className="text-[16px] font-bold leading-[16px] text-[#7B6660]">
              {recipe?.ingredients?.length.toString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsCard;
