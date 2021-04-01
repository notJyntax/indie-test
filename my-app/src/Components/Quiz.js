import {useState, useContext} from 'react';
import {QuizContext} from '../Helpers/Contexts';
import {Questions} from '../Helpers/QuestionBank';

export default function Quiz(){
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const imgSrc = Questions[currQuestion].image;

  const handleAnswer = (e) => {
    setCurrQuestion(currQuestion + 1);
    const optionChosen = e.target.innerText;
    if(optionChosen === Questions[currQuestion].answer) {
      setScore(score + 1);
    }
    if(currQuestion === Questions.length - 1) finishQuiz();
  }

  const finishQuiz = () => {
    setGameState("result");
  }

  return(
    <div className="Quiz">
      <h1 className="QuizText">{Questions[currQuestion].q}</h1>
      <div className="Image">
        <img src={imgSrc}></img>
      </div>
      <div className="Options">
        {Questions[currQuestion].options.map((option) => (
          <button onClick={handleAnswer}>{option}</button>
        ))}
      </div>
    </div>
  )
}
