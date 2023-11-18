import recipedata from './recipe.json';

function IngredientList() {

  const ingredientListItems = recipedata.map(recipe => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    });
  });
   return <div>{ingredientListItems}</div>;
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 