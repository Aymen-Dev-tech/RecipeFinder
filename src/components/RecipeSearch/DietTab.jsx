export const DietTab = ({ label, dietType, onClick }) => {
  const lableToDietType = label.toLowerCase().replace(" ", "-");
  return (
    <div
      className={
        dietType === lableToDietType
          ? "flex h-[40px] w-[195.75px] content-center justify-center border-b-[3px] border-[#34CF3D]"
          : "flex h-[40px] w-[195.75px] content-center justify-center"
      }
    >
      <button type="button" onClick={onClick}>
        <p
          className={
            dietType === lableToDietType
              ? "text-[22px] font-bold leading-[20px] text-[#34CF3D]"
              : "text-[20px] font-normal leading-[20px] text-[#808080]"
          }
        >
          {label}
        </p>
      </button>
    </div>
  );
};
