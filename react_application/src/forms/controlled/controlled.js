import { useState } from "react";
import "./index.css"


const ControlledInput =()=>{
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [Email, setEmail]= useState("")
    const [userNameErr, setUserNameErr] = useState(null)
    const [passwordErr, setPasswordErr] = useState(null)
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(null)


    const userNameHandler =(event)=>{
        const userName = event.target.value
        setUserName(userName)
        if(userName.trim().length<6){
            setUserNameErr("username must be greater than 6 characters and should be unique")
        }else{
            setUserNameErr(null)
        }
        console.log(userName)
    }

    const eMailHandler=(event)=>{
        const email = event.target.value
        setEmail(email)
    }

    const passwordHandler =(event)=>{
        const passwordValue = event.target.value
        setPassword(passwordValue)
        if(passwordValue.trim().length<6 && !/[A-Z]/.test(passwordValue)){
            setPasswordErr("password must contain 6 characters and contain a capital letter")
        }else{
            setPasswordErr(null)
        }
    }

    const ConfirmPasswordHanlder = (event)=>{
        const confirmPasswordValue = event.target.value
        setConfirmPassword(confirmPasswordValue)
        if(confirmPasswordValue !==password){
            setConfirmPasswordErr("password do not match")
        }else{
            setConfirmPasswordErr(null)
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const userDetails ={
            username: username,
            password:password,
            confirmPassword: confirmPassword,
            id:Math.random()
        }
        console.log(userDetails)
    }
    return(
        <div className="container">
        <form onSubmit={handleSubmit} className="form-container">
            <label>Username:</label>
            <input type="text" value={username} onChange={userNameHandler} />
           {
            userNameErr && <span style={{color:"red"}}>{userNameErr}</span>
           } 
           <label>Email:</label>
            <input type="Email" value={Email} onChange={eMailHandler}/>
            <label>Password:</label>
            <input type="password" value={password} onChange={passwordHandler}/>
            {
            passwordErr && <span style={{color:"red"}}>{passwordErr}</span>
           } 
            <label>Confirm Password:</label>
            <input type="Password" value={confirmPassword} onChange={ConfirmPasswordHanlder}/>
            {
            confirmPasswordErr && <span style={{color:"red"}}>{confirmPasswordErr}</span>
           } 
            <button type="submit">Create Account</button>
            <a href="/">Already have account?</a>
        </form>
        </div>
    )
}

export default ControlledInput;