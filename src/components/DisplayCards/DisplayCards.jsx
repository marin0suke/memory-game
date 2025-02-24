import Card from "../Card/Card";
import "./DisplayCards.css";
import { v4 as uuidv4 } from 'uuid';

const DisplayCards = ({ cards, onCardClick }) => {
    if (!cards || cards.length == 0) {
        return <p>No cards available</p>
    }

    const processedCards = cards.map((card, index) => ({
        ...card,
        uniqueId: uuidv4(),
    }));

    return (
        <div className="card-grid">
        {processedCards.map((card) => (
            <Card
            key={card.uniqueId}
            imageUrl={card.imageUrl}
            description={card.description}
            onClick={() => onCardClick(card.id)}
            />
        ))}
        </div>
  );
};

export default DisplayCards;