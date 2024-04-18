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
    const [EmailErr, setEmailErr] = useState(null)



    const userNameHandler =(event)=>{
        const userName = event.target.value
        setUserName(userName)
        setUserNameErr(null)
        if(userName.trim().length<6){
            setUserNameErr("username must be greater than 6 characters and should be unique")
        }
        console.log(userName)
    }

    const eMailHandler=(event)=>{
        const emailValue = event.target.value
        setEmail(emailValue)
        setEmailErr(null)
        if(emailValue.trim() && !emailValue.endsWith("@gmail.com")){
            setEmailErr("Email ends with @gmail.com")
        }else{
            setEmailErr(null)
        }
    }

    const passwordHandler =(event)=>{
        const passwordValue = event.target.value
        setPassword(passwordValue)
        setPasswordErr(null)
        if(passwordValue.trim().length<6 && !/[A-Z]/.test(passwordValue)){
            setPasswordErr("password must contain 6 characters and contain a capital letter")
        }else{
            setPasswordErr(null)
        }
    }

    const ConfirmPasswordHanlder = (event)=>{
        const confirmPasswordValue = event.target.value
        setConfirmPassword(confirmPasswordValue)
        setConfirmPasswordErr(null)
        if(confirmPasswordValue !==password){
            setConfirmPasswordErr("password do not match")
        }else{
            setConfirmPasswordErr(null)
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()

        if (!username.trim()) {
            setUserNameErr("Username should not be empty");
          }
          if(!Email.trim()){
            setEmailErr("email should notbe empty")
          }
          if(!password.trim()){
            setPasswordErr("password should not be empty")
          }
          if(!confirmPassword.trim()){
            setConfirmPasswordErr("confirm password should not be empty")
          }


if(username.trim() && Email.trim()&&password.trim()&&confirmPassword.trim()){
        const userDetails ={
            username: username,
            email: Email,
            password:password,
            confirmPassword: confirmPassword,
        }
        console.log(userDetails)

        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")
    }

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
            {
                EmailErr && <span style={{color:"red"}} >{EmailErr}</span>
            }
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