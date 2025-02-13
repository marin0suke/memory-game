import { useState, useEffect } from 'react'
import DisplayCards from '../DisplayCards/DisplayCards'
import Scoreboard from '../Scoreboard/Scoreboard'

const GameLogic = () => {
    const [ cards, setCards ] = useState([]);
    const [ clickedCards, setClickedCards ] = useState([]);
    const [ currentScore, setCurrentScore ] = useState(0);
    const [ bestScore, setBestScore ] = useState(0);
    const [ gameOver, setGameOver ] = useState(false);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch("api goes here");
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();

                setCards(data); // assuming data is an array of objects - { imageURL, descreiption, id }
            } catch (error) {
                console.log("Error fetching card data: ", error);
            }
        };
        
        fetchCards();
    }, []) // no dependencies - runs once on mount.

    return (
        <div>
            
        </div>
    )
}

export default GameLogic;