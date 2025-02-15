import { useState, useEffect } from 'react'
import DisplayCards from '../DisplayCards/DisplayCards'
import Scoreboard from '../Scoreboard/Scoreboard'

const GameLogic = () => {
    const [ cards, setCards ] = useState([]);
    const [ clickedCards, setClickedCards ] = useState([]);
    const [ currentScore, setCurrentScore ] = useState(0);
    const [ bestScore, setBestScore ] = useState(0);

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

    const shuffleCards = () => { 
        setCards((prevCards) => {
            let shuffled = [...prevCards];
                for (let i = shuffled.length - 1; i > 0; i--) { // decrement 
                    const j = Math.floor(Math.random() * (i + 1)); // random index
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
                } 
            return shuffled;
        })
    };

    const handleCardClick = (cardId) => {
        if (clickedCards.includes(cardId)) {
            resetGame();
            return;
        }

        const newScore = currentScore + 1;
        setClickedCards([...clickedCards, cardId]);
        setCurrentScore(newScore);

        if (newScore > bestScore) setBestScore(newScore);

        shuffleCards();
    }
    // we need handleCardClick to take the card id being clicked, 
    //first check if that card has been clicked before. if has, game over is called.
    // if it hasn't then it becomes added to the clickedCard array, - this calls setClickedCards? add all previous cards and add the new card id.
    // increment the score by one.
    // if the current score surpasses best score, also update best score.

    const resetGame = () => {
        setCurrentScore(0);
        setClickedCards([]);
        shuffleCards();
    }
    // resets the score. resets clickedCards to empty array.



    return (
        <div>
            <Scoreboard currentScore={currentScore} bestScore={bestScore}/>

            <DisplayCards cards={cards} onCardClick={handleCardClick} />
        </div>
    )
}

export default GameLogic;