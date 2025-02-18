

const Card = ({ imageUrl, description, onClick }) => (
    <div className="card" onClick={onClick}>
        <img src={imageUrl} alt={description} className="card-image" />
        <p className="card-description">{description}</p>
    </div>
)

export default Card;