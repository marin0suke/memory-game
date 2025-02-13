import Card  from '../Card/Card'

const DisplayCards = ({ cards, onCardClick }) => {
    return (
        <div className="card-grid">
            {cards.map(card => (
                <Card 
                    key={card.id}
                />
            ))}
        </div>
    )
}