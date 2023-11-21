import { useState } from 'react';

export default function BoardAssignment () {

   const [boardName, setBoardName] = useState("No boards yet!");

   const boards = [
      {
         label: "Christmas Treats",
         value: "christmasTreats"
      },
      {
         label: "Quick and Easy Desserts",
         value: "easyDesserts"},
      {
         label: "Potluck Sweets",
         value: "potluckSweets"
      }
   ];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.label}</option>
});

   const handleChange = (event) => {   
      setBoardName(event.target.value);
    }

   return (
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boardOptions}
         </select>

      <p>Saved to {boardName}!</p> 
      </div>
   );
}
