const PlayerSingle = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <img src="soccer.jpeg" alt="Soccer Image"/>
                    <span className="card-title">
                        {props.currentPlayer.firstName} {props.currentPlayer.lastName}
                    </span>
                </div>
                <div className="card-content">
                    <p>
                        Phone: {props.currentPlayer.phone} - Email: {props.currentPlayer.email}
                    </p>
                    <p>
                        Strength: {props.currentPlayer.strength} - Ability: {props.currentPlayer.ability}
                    </p>
                </div>
                <div className="card-action">
                    Team: {props.currentPlayer.team}
                </div>
            </div>
        </div>
    );
}
 
export default PlayerSingle;