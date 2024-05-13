const Footer = () => {
  return (
    <div className="flex flex-1 flex-col gap-10 bg-[#F3F0EF]  px-[100px] py-[50px] 2xl:w-screen">
      <p className=" text-xl font-bold text-[#34CF3D] ">RecipeFinder</p>
      <div className="flex flex-wrap justify-between max-[1200px]:gap-10">
        <div className="flex flex-wrap gap-20 md:gap-32">
          <div className="flex flex-col gap-1">
            <p className="mb-2 text-lg font-bold text-[#52423D]"> Menu </p>
            <p className="text-[#52423D]"> Home </p>
            <p className="text-[#52423D]"> Recipe </p>
            <p className="text-[#52423D]"> Community </p>
            <p className="text-[#52423D]"> About us </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="mb-2 text-lg font-bold"> Categories </p>
            <p className="text-[#52423D]"> Breakfast </p>
            <p className="text-[#52423D]"> Lunch </p>
            <p className="text-[#52423D]"> Dinner </p>
            <p className="text-[#52423D]"> Drink </p>
            <p className="text-[#52423D]"> Dessert </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="mb-2 text-lg font-bold"> Social Media </p>
            <p className="text-[#52423D]"> Instagram </p>
            <p className="text-[#52423D]"> Reddit </p>
            <p className="text-[#52423D]"> Facebook </p>
            <p className="text-[#52423D]"> Youtube </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-12">
          <p className="text-lg font-bold text-[#52423D]">
            Signup for our newsletter
          </p>
          <input
            type="text"
            placeholder="Your Email Address"
            className=" w-[240px] border-b-2 border-[#CCBDB8] bg-[#F3F0EF] pb-2 text-lg text-[#CCBDB8]  outline-none focus:border-[#34CF3D] sm:w-[420px]"
          />
          <button className="relative left-[120px] h-[45px] w-[120px] rounded-2xl bg-[#34CF3D] font-bold text-[#CCFCCE] sm:bottom-28 sm:left-[300px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
