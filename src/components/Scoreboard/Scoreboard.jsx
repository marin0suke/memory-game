
const Scoreboard = ({ currentScore, bestScore }) => {
    return (
        <div className="scoreboard">
            <h2>Current Score: {currentScore}</h2>
            <h3>Best Score: {bestScore}</h3>
        </div>
    )
}

export default Scoreboard;