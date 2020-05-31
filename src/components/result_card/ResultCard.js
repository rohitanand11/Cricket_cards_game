import React from 'react';
import Classes from './ResultCard.module.css';

const ResultCard = (props) => {
    return(
        <div className={Classes.container}>
            <p className={Classes.player_name}><strong>{props.playerName}</strong></p>
            <p className={Classes.resultText}>{props.result}</p>
            <p className={Classes.resultText}>exp - {props.exp}</p>
        </div>
    );
}

export default ResultCard;