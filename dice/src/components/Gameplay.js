import Styles from "./gameplay.module.css";
import { useState } from "react";
import dice1 from "./dice//dice_1.png";
import dice2 from "./dice/dice_2.png";
import dice3 from "./dice/dice_3.png";
import dice4 from "./dice/dice_4.png";
import dice5 from "./dice/dice_5.png";
import dice6 from "./dice/dice_6.png";

function defrules() {
  return (
    <>
      <div className={Styles.rulesbox}>
        <h1 className={Styles.rulesheading}>How to play dice game</h1>
        <p1 className={Styles.rules}>Select any number</p1>
        <p1 className={Styles.rules}>Click on dice image</p1>
        <p1 className={Styles.rules}>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p1>
        <p1 className={Styles.rules}>
          if you get wrong guess then 2 point will be dedcuted{" "}
        </p1>
      </div>
    </>
  );
}

function error() {
  return (
    <>
      <div className={Styles.error1}>
        <p1>You have not selected any number</p1>
      </div>
    </>
  );
}

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const isselected = false;

const arrNum = [1, 2, 3, 4, 5, 6];

function Gameplay() {
  const [showrules, setShowrules] = useState(false);
  const togglerules = () => {
    setShowrules(!showrules);
  };

  const [number, setnumber] = useState(false);
  const toggleerror = () => {
    if (number === false) {
      setnumber(!number);
    }
  };

  const [score, setscore] = useState(0);
  const resetscore = () => {
    setscore(0);
  };

  const [selectednum, setselectednum] = useState();
  const selectnum = (e) => {
    var isselected = true;
    setselectednum(e.target.value);
  };

  const [currentdice, setcurrentdice] = useState(dice1);
  const genrandomnum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const roll = () => {
    const randomnum = genrandomnum(1, 7);
    setcurrentdice(diceImages[randomnum - 1]);

    if (selectednum === randomnum) {
      setscore(score + randomnum);
    }

    else {
      setscore(score - 2);
    }
  };


  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.bar}>
          <div className={Styles.scorecard}>
            <h1 className={Styles.score}>{score}</h1>
            <p1 className={Styles.line}>Total Score</p1>
          </div>
          <div className={Styles.number_selct}>
            {number && error()}
            <div className={Styles.buttons}>
              {arrNum.map((value, i) => (
                <box
                  isselected={value == selectednum}
                  key={i}
                  onClick={() => setselectednum(value)}
                  className={value == selectednum ? Styles.selectedbtn : Styles.btn}
                >
                  {value}
                </box>
              ))}
            </div>
            <div className="titlebdy">
              <p1 className={Styles.title}>select number</p1>
            </div>
          </div>
        </div>
        <div className={Styles.game}>
          <div className={Styles.dice} onClick={roll}>
            <img
              className={Styles.diceimg}
              src={currentdice}
              alt="dice"
            />
            <p1 className={Styles.clicktitle}>click on dice to roll</p1>
          </div>
          <div className={Styles.btns}>
            <button className={Styles.btn1} onClick={resetscore}>
              reset scores
            </button>
            <button className={Styles.btn2} onClick={togglerules}>
              show rules
            </button>
          </div>
          {showrules && defrules()}
        </div>
      </div>
    </>
  );
}

export default Gameplay;