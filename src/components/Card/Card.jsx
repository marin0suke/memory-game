

const Card = ({ imageUrl, description, onClick }) => (
    <div className="card" onClick={onClick}>
        <img src={imageUrl} alt={description} />
        <p>{description}</p>
    </div>
)

export default Card;