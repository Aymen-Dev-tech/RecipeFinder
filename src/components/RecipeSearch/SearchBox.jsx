export const SearchBox = ({ value, setValue }) => {
  return (
    <div>
      <div className=" mt-5 flex max-w-[560px] m-auto min-w-[380px]">
        <input
          type="text"
          name="search"
          placeholder="Type here, e.g., chicken..."
          value={value}
          onChange={setValue}
          className="rounded-2xl bg-[#E7DDDA] pl-4 w-[100%] min-w-[350px] "
        />
        <div className="relative right-[54px] flex h-[65px] w-[44.75px]">
          <img
            className="m-auto"
            alt="search-icon"
            src={
              value.length > 0
                ? "/icons/search-icon.svg"
                : "/icons/search-icon-disabled.svg"
            }
          />
        </div>
      </div>
    </div>
  );
};
