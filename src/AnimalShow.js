import "./AnimalShow.css"
import { useState } from "react";

import birdImg from "./svg/bird.svg";
import catImg from "./svg/cat.svg";
import cowImg from "./svg/cow.svg";
import dogImg from "./svg/dog.svg";
import gatorImg from "./svg/gator.svg";
import horseImg from "./svg/horse.svg";
import heartImg from "./svg/heart.svg";

function AnimalShow({animalType}) {
    const [clicks, setClicks] = useState(0);

    const svgMap = {
        "bird": birdImg, 
        "cat": catImg, 
        "cow": cowImg, 
        "dog": dogImg, 
        "gator": gatorImg, 
        "horse": horseImg
    }

    const handleClick = () => {
        setClicks(clicks + 1);
    }

   
    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" alt="animal" src={svgMap[animalType]}/>
            <img className="heart"  alt="heart" src={heartImg} style={{ width: 10 + 10 * clicks + "px"}}/>
        </div>
    )    
}

export default AnimalShow;