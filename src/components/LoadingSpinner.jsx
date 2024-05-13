const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-[120px] w-[120px] animate-spin rounded-full border-[16px] border-t-[16px] border-[#E7DDDA] border-t-[#2FB538]"></div>
    </div>
  );
};

export default LoadingSpinner;
