import {useState, useContext, useEffect, useRef} from 'react'
import {QuizContext} from '../Helpers/Contexts'
import {Questions} from '../Helpers/QuestionBank'

export default function Quiz(){
  const { score, setScore, setGameState } = useContext(QuizContext)
  const [currQuestion, setCurrQuestion] = useState(0)
  const imgSrc = Questions[currQuestion].image

  const handleAnswer = (e) => {
    setCurrQuestion(currQuestion + 1)
    const optionChosen = e.target.innerText
    if(optionChosen === Questions[currQuestion].answer) {
      setScore(score + 1)
    }
    if(currQuestion === Questions.length - 1) finishQuiz();
  }

  const finishQuiz = () => {
    setGameState("result")
  }

  const interval = useRef(null)
  const [timer, setTimer] = useState('00')

  function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor((total/1000)%60)
    return { total,  seconds }
  }

  function startTimer(deadline){
    let { total,  seconds } = getTimeRemaining(deadline)
    if(total >= 0){
      setTimer(
        ('0'+seconds)
      )
    }else{
      setCurrQuestion(currQuestion + 1)
      clearInterval(interval.current)
    }
  }

  function clearTimer(endtime){
    setTimer('05')
    if(interval.current) clearInterval(interval.current)
    const id = setInterval(()=>{
      startTimer(endtime)
    }, 1000)
    interval.current = id
  }

  function getDeadlineTime(){
    let deadline = new Date()
    deadline.setSeconds(deadline.getSeconds() + 5)
    return deadline
  }

  const timeBar = () => {
    
  }

  useEffect(()=>{
    clearTimer(getDeadlineTime())
    return () => {if(interval.current) clearInterval(interval.current)}
  }, [currQuestion])

  return(
    <div className="Quiz">
      <div className="Timer">{timer}</div>
      <h1 className="QuizText">{Questions[currQuestion].q}</h1>
      <div className="Image">
        <img src={imgSrc} alt={Questions[currQuestion].q}/>
      </div>
      <div className="Options">
        {Questions[currQuestion].options.map((option) => (
          <button onClick={handleAnswer}>{option}</button>
        ))}
      </div>
    </div>
  )
}
