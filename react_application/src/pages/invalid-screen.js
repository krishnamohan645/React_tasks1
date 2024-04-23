import React from 'react'
import "./pages.css"
import { useNavigate } from 'react-router-dom'

function InvalidScreen() {

    const navigate = useNavigate()

    const BackToHome = ()=>{
        if(true){
            navigate("/")
        }else{
            console.log("Invalid Url")
        }
    }

  return (
    <div className='invalid'>
      <h1>Invalid Screen</h1>
      <button onClick={BackToHome}>back to screen</button>
    </div>
  )
}

export default InvalidScreen
