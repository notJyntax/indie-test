import { useState } from 'react'
import { QuizContext } from './Helpers/Contexts'
import './App.css'
import Main from './Components/Main'
import Quiz from './Components/Quiz'
import Result from './Components/Result'


export default function App() {
  const [gameState, setGameState] = useState('main')
  const [score, setScore] = useState(0);
  
  return (
    <div className='App'>
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
    { gameState === 'main' && <Main /> }
    { gameState === 'quiz' && <Quiz /> }
    { gameState === 'result' && <Result /> }
    </QuizContext.Provider>
    </div>
  )
}
