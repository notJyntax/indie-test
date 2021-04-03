import {useState, useContext, useEffect} from 'react';
import {QuizContext} from '../Helpers/Contexts';


export default function Result(){
const { score } = useContext(QuizContext);
const [result, setResult] = useState("");

useEffect(() => {
  if(score < 10) {
    setResult("당신은 막귀")
  }else if(score > 9 && score < 14) {
    setResult("당신은 악귀")
  }else if(score > 13 && score < 18) {
    setResult("당신은")
  }else if(score > 17){
    setResult("당신은 악귀")
  }
}, [])

  return(
    <div className="Result">
      <h1 className="Logo">Result</h1>
      <div className="ImageBox" />
      <div className="ResultText">{result}</div>
      <button className="RestartBtn" onClick={()=>{window.location.reload()}}>restart</button>
    </div>
  )
}
