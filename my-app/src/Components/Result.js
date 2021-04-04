import { useState, useContext, useEffect } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import ClipboardCopy from './ClipboardCopy'

export default function Result(){
const { score } = useContext(QuizContext)
const [result, setResult] = useState({ name: '', text: '' })

useEffect(() => {
  if(score < 10) {
    setResult({ name: '톱백귀', text:'톱100은 항상 전체 재생한 덕에 메이져로 올라온 인디음악들은 나름 다 꿰차고 있군요 당신은 톱백귀 입니다.' })
  }else if(score > 9 && score < 14) {
    setResult({ name: '막귀', text:'그다지 내 취향이 아니라서  안들었거나 관심없던 이들만 문제로 나왔나요? 당신은 막귀입니다.' })
  }else if(score > 13 && score < 18) {
    setResult({ name: '마귀', text:'나름 인디 카테고리만 찾아서 들었던 지라 , 노래랑 이름을 들으면 알지만 이렇게까지는 궁금하지않았던 당신은 마귀입니다. ' })
  }else if(score > 17){
    setResult({ name: '악귀', text:'테스트에 언급된 아티스트는 물론 속사정까지 꿰차고 있으며, 더많이 명곡과 가수가 있는데 하면서 드릉드릉한가요? 찐 악귀입니다.' })
  }
}, [score])

  return(
    <div className="Result">
      <div className="ResultBox">
        <h3>{result.name}</h3>
        <p>{result.text}</p>
      </div>
      <div className="ImageBox">
        <img src="images/001.jpeg" alt="결과 이미지" />
      </div>
      <button className="RestartBtn" onClick={ () => { window.location.reload() } }>restart</button>
      <ClipboardCopy />
    </div>
  )
}
