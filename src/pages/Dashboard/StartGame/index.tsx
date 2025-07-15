import style from "./style.module.css"

const StartGame = () => {
  return (
    <div>
      <div className={style.boxGame}>
        <div className={style.stepGame}></div>
        <div className={style.askGame}>Você trabalha atualmente como dev?</div>
        <div className={style.stepGame}></div>
        <div className={style.stepGame}></div>
      </div>
    </div>
  )
}

export default StartGame;