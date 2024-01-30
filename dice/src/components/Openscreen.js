import styles from "./openscreen.module.css";

function Openscreen({toggle}) {
  return (
    <div className={styles.container}>
      <div className="image">
        <img className={styles.img} src="/images/dices1.png" alt="dices" />
      </div>
      <div className = {styles.heading}>
        <h1 className={styles.head}>DICE GAME</h1>
        <button className={styles.btn} onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
}

export default Openscreen;
