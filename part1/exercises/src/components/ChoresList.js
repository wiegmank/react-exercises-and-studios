import classes from './ChoresList.module.css';

export default function ChoresList () {
   let MyChores = ["Empty dishwasher", "Complete prep work", "Buy groceries"];
   
   return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ul className = {classes.choresText}>
            <li>{MyChores[0]}</li>
            <li>{MyChores[1]}</li>
            <li>{MyChores[2]}</li>
         </ul>
      </div>
   )
}