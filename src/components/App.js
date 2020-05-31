import React, { Component } from "react";
import CricketerSet from "./cricketer_set/CricketerSet";
import classes from "./App.module.css";

import Dhoni from "../assets/images/1.jpg";
import Virat from "../assets/images/2.jpg";
import Rohit from "../assets/images/3.jpg";
import Shikhar from "../assets/images/4.jpg";
import hardik from "../assets/images/5.jpg";
import Rahul from "../assets/images/6.jpg";
import Bumrah from "../assets/images/7.jpg";
import Bhuvi from "../assets/images/8.jpg";

const DataArray = [
  { name: "Dhoni", exp: 98, imgpath: Dhoni },
  { name: "Virat", exp: 96, imgpath: Virat },
  { name: "Rohit", exp: 92, imgpath: Rohit },
  { name: "Shikhar", exp: 85, imgpath: Shikhar },
  { name: "hardik", exp: 79, imgpath: hardik },
  { name: "Rahul", exp: 86, imgpath: Rahul },
  { name: "Bumrah", exp: 91, imgpath: Bumrah },
  { name: "Bhuvi", exp: 83, imgpath: Bhuvi },
];

let array1 = [...DataArray];
let array2 = [];

class App extends Component {
  EvaluateArray = () => {
    for (let i = 0; i < parseInt(DataArray.length / 2); i++) {
      let random_index = Math.floor(array1.length * Math.random());
      array2.push(array1[random_index]);
      array1.splice(random_index, 1);
    }
  };

  ComputeSum = (pArray) => {
    const sumOfArrayElem = pArray.reduce((sum, elem) => {
      return sum + elem.exp;
    }, 0);

    console.log(sumOfArrayElem);
    return sumOfArrayElem;
  };

  render() {
    array1 = [...DataArray];
    array2 = [];
    let player1 = {playerName:"Player 1", GameResult: "LOOSER", totalExp: 0 };
    let player2 = {playerName:"Player 2", GameResult: "LOOSER", totalExp: 0 };

    this.EvaluateArray();

    player1.totalExp = this.ComputeSum(array1);
    player2.totalExp = this.ComputeSum(array2);

    if (player1.totalExp > player2.totalExp) {
      player1.GameResult = "WINNER";
    } else if (player1.totalExp < player2.totalExp) {
      player2.GameResult = "WINNER";
    } else {
      player1.GameResult = "DRAW";
      player2.GameResult = "DRAW";
    }

    return (
      <div className={classes.container}>
        <CricketerSet array={array1} player={player1}/>
        <CricketerSet array={array2} player={player2}/>
      </div>
    );
  }
}

export default App;
