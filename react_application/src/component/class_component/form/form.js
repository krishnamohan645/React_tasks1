import { Component,  } from "react";


class CustomForm extends Component{
    render(){
        return(
            <>
                <h2>Form</h2>
                <form>
                    <input type="mail" placeholder="Email"/>
                    <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <button type="submit">Sign in</button>
                </form>
            </>
        )
    }
}


export default CustomForm;