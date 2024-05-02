import React from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const fetchDrinks = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  const response = await fetch(url);
  const data = await response.json();
  return data;
}; // A function to fetch our data
const DrinksPage = async () => {
  const data = await fetchDrinks(); //we call the function here
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
    </div>
  );
};

export default DrinksPage;