import { useContext } from "react";
import { loadingContext } from "../context/loadingContext";

const useLoading = () => {
  return useContext(loadingContext);
};

export default useLoading;
