import { useState } from 'react'
import './App.css'
import Main from './Components/Main'
import Quiz from './Components/Quiz'
import Result from './Components/Result'
import { QuizContext } from './Helpers/Contexts'

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
