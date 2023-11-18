import './styles.css';
import oceans from './oceans.json';
import Button from './Button';

const listItem = oceans.map(ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h1>{ocean.name}</h1>
      <h2>Fun Facts</h2>
      <ol>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ol>
      <Button />
   </div>
   );

function Profile()
{
   return(
         <ul>{listItem}</ul>
   );
}

export default Profile;