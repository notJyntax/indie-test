import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

export default function Main(){
  const {setGameState} = useContext(QuizContext)

  return(
    <div className="Main">
    <h1 className="Logo">Indie <br /> Maniac Test</h1>
    <div className="ImageBox" />
      <button className="StartBtn" onClick={()=>{setGameState("quiz")}}>start</button>
    </div>
  )
}
