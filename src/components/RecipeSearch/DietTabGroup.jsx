const DietTabGroup = ({ dietTabs }) => {
  return (
    <div className="flex flex-row flex-wrap content-center justify-center gap-[47px] border-b-[0.75px] border-b-[#E7DDDA] px-[98px]">
      {dietTabs}
    </div>
  );
};

export default DietTabGroup;
