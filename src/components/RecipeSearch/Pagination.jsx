const Pagination = ({ currentPage, setCurrentPage, recipesLength }) => {
  const handelPrePageUpdate = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handelNextPageUpdate = () => {
    if (currentPage === recipesLength) return;
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="mb-5 flex justify-center gap-[10px]">
      <button
        className=" h-[50px] w-[80px] rounded-2xl bg-[#34CF3D] transition-[0.2s] hover:bg-[#CCFCCE]"
        onClick={handelPrePageUpdate}
      >
        <img
          alt="chevron-left"
          src="/icons/chevron-left.svg"
          className="m-auto"
        />
      </button>
      <div className="  flex h-[50px] w-[80px] items-center justify-center rounded-2xl bg-[#E7DDDA] text-[#52423D]">
        {currentPage}
      </div>
      <div className="  flex h-[50px] w-[80px] items-center justify-center  rounded-2xl bg-[#E7DDDA] text-[#52423D]">
        of
      </div>
      <div className="  flex h-[50px] w-[80px] items-center justify-center  rounded-2xl bg-[#E7DDDA] text-[#52423D]">
        {recipesLength}
      </div>
      <button
        className=" h-[50px] w-[80px] rounded-2xl bg-[#34CF3D] transition-[0.2s] hover:bg-[#CCFCCE]"
        onClick={handelNextPageUpdate}
      >
        <img
          alt="chevron-right"
          src="/icons/chevron-right.svg"
          className="m-auto"
        />
      </button>
    </div>
  );
};

export default Pagination;
