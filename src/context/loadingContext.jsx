import { createContext, useState } from "react";
export const loadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(null);

  return (
    <loadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </loadingContext.Provider>
  );
};
