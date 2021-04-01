import {useContext} from 'react';
import {QuizContext} from '../Helpers/Contexts';

export default function Main(){
  const {gameState, setGameState} = useContext(QuizContext)

  return(
    <div className="Main">
    <h1 className="Logo">Indie <br /> Maniac Test</h1>
    <div className="ImageBox"></div>
      <button className="StartBtn" onClick={ () => {setGameState("quiz")} }>start</button>
    </div>
  )
}
