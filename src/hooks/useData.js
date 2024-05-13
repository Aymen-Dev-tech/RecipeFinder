import { useEffect, useState } from "react";
import useLoading from "./useLoading";
import { addData, dbPromise } from "../utils/indexedDB";

const useData = (q = "", dietType = "balanced", uri = "", baseUrl) => {
  const { setIsLoading } = useLoading();
  const [data, setData] = useState(null);
  useEffect(() => {
    const getDataFromIdb = async () => {
      try {
        const db = await dbPromise;
        const recipes = await db.getAll("recipes");
        if (recipes.length > 0) {
          setData(recipes);
        } else {
          fetchData();
        }
      } catch (error) {
        console.error("there is an error whit getDataFromIdb: ", error);
      }
    };
    let ignore = false;
    const fetchData = () => {
      let query;
      if (uri == "") {
        query = { q, diet: dietType };
      } else {
        query = { uri };
      }
      setIsLoading(true);
      fetch(
        baseUrl +
          new URLSearchParams({
            type: "public",
            app_id: import.meta.env.VITE_APP_ID,
            app_key: import.meta.env.VITE_APP_KEY,
            ...query,
          }),
      )
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json.hits);
            if (q == "" && dietType == "balanced" && uri == "") {
              addData(json.hits);
            }
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    if (q == "" && dietType == "balanced" && uri == "") {
      getDataFromIdb();
    } else {
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [baseUrl, dietType, q, uri]);
  return data;
};

export default useData;
