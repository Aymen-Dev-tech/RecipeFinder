import { openDB } from "idb";

export const dbPromise = openDB("Recipes", 1, {
  upgrade(db) {
    // Create a store of objects
    db.createObjectStore("recipes", {
      // The 'id' property of the object will be the key.
      keyPath: "id",
      // If it isn't explicitly set, create a value by auto incrementing.
      autoIncrement: true,
    });
    // Create an index on the 'date' property of the objects.
    // store.createIndex("label", "label");
    // console.log("store index name: ", store.indexNames);
  },
});

export const addData = async (recipes) => {
  const db = await dbPromise;
  const t = db.transaction("recipes", "readwrite");
  const recipesPromises = recipes.map((recipe) => {
    t.store.add({
      recipe: {
        uri: recipe.recipe.uri,
        label: recipe.recipe.label,
        image: recipe.recipe.image,
        calories: recipe.recipe.calories,
        totalTime: recipe.recipe.totalTime,
        ingredients: recipe.recipe.ingredients,
      },
    });
  });
  recipesPromises.push(t.done);
  await Promise.all(recipesPromises);
};
