import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import ClipboardCopy from './ClipboardCopy'

export default function Main(){
  const { setGameState } = useContext(QuizContext)

  return(
    <div className="Main">
      <h1 className="Logo">Indie <br />Maniac Test</h1>
      <div className="ImageBox">
        <img src="images/002.jpeg" alt="메인 이미지" />
      </div>
        <button className="StartBtn" onClick={() => { setGameState("quiz") }}>start</button>
        <ClipboardCopy />
    </div>
  )
}
