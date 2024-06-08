import {useEffect, useState} from 'react'
import "./App.css"

export const App = () => {
  const [advice,setAdvice]=useState("Please click button to get Advice");
  const[count,setCount]=useState(0);
  async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    // console.log(res);
    const data=await res.json();
    // console.log(data)
    setAdvice(data.slip.advice);
    setCount((c)=>c+1)
  }
  useEffect(function(){
    getAdvice();
  },[]);

  return (
    <div>
    <h3>{advice}</h3>
    <button onClick={getAdvice}>Get Advice</button>

    <p>You have read  <b>{count}</b>  pieces of advice</p>
    </div>
  )
}
