import React from "react";
import DrinksList from "@/components/DrinksList";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const fetchDrinks = async () => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });
  const response = await fetch(url);
  // throw error
  if (!response.ok) {
    throw new Error("Failed to fetch drinks...");
  }
  const data = await response.json();
  return data;
}; // A function to fetch our data
const DrinksPage = async () => {
  const data = await fetchDrinks(); //we call the function here
  console.log(data);
  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
