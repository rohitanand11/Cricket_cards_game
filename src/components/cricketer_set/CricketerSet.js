import React from 'react';
import CricketCard from '../cricket_card/CricketCard';
import ResultCard from '../result_card/ResultCard';
import Classes from './CricketerSet.module.css';

const CricketerSet = (props) => {
    console.log(props);
    return (
        <div className={Classes.container}>
            <CricketCard name={props.array[0].name} exp={props.array[0].exp} imgpath={props.array[0].imgpath}/>
            <CricketCard name={props.array[1].name} exp={props.array[1].exp} imgpath={props.array[1].imgpath}/>
            <CricketCard name={props.array[2].name} exp={props.array[2].exp} imgpath={props.array[2].imgpath}/>
            <CricketCard name={props.array[3].name} exp={props.array[3].exp} imgpath={props.array[3].imgpath}/>
            <ResultCard playerName={props.player.playerName} result={props.player.GameResult} exp={props.player.totalExp}/>
        </div>
    )
}

export default CricketerSet;