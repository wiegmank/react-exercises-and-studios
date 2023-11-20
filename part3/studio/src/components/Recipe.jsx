import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.twopeasandtheirpod.com/oreo-balls/";
   let authorPhoto = "https://www.twopeasandtheirpod.com/wp-content/uploads/2020/10/cookbook-baking-with-boys-scaled.jpg";
   let authorName = "Maria Lichty";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} width="200px"/>
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "Oreo Cookies", 
      "Cream Cheese", 
      "Chocolate", 
      "A smile", 
      "Fun"];

   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
   });
   
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Oreo Balls</h1>
            <p>Oreo Balls are an easy no-bake treat made with crushed up Oreo cookies, cream cheese, and chocolate. Oreo Balls are a favorite Christmas or anytime treat!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.twopeasandtheirpod.com/wp-content/uploads/2018/12/Oreo-Balls-4.jpg" alt="" className="imageUpdates" height="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
