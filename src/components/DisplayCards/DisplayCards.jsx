import Card from "../Card/Card";

const DisplayCards = ({ cards, onCardClick }) => {
    if (!cards || cards.length == 0) {
        return <p>No cards available</p>
    }

    return (
        <div className="card-grid">
        {cards.map((card) => (
            <Card
            key={card.id}
            imageUrl={card.imageUrl}
            description={card.description}
            onClick={() => onCardClick(card.id)}
            />
        ))}
        </div>
  );
};

export default DisplayCards;