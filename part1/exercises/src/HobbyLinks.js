export default function HobbyLinks() {
    let HobbyLinks = ["https://www.woodcraft.com", "https://www.woodturner.org"];
    let hobbySites = "Sites about my Hobby"

    return (
    <div>
        <h3>{hobbySites}</h3>
        <a href = {HobbyLinks[0]}> WoodCraft </a>
        <a href = {HobbyLinks[1]}> WoodTurner.org </a>
    </div>
    );
};