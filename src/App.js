import "./App.css";
import  { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"]
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    return randomAnimal
} 

function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        console.log("animal:", animal);
        return <AnimalShow animalType={animal} key={index}/>
    })

    return(
        <div className="app">
            <button onClick={handleClick}>Add button</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}
export default App;