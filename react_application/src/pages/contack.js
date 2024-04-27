import { useContext } from "react";
import ColorSchemesExample from "../components/header";
import { DataShare } from "../navigation-stack/navigation-stack";


const ContactSCreen =()=>{
    const {data,changeColor}=useContext(DataShare)
    return(
        <>
            <h1 style={data}>hii</h1>
        <button onClick={changeColor}> changeColor</button> 

        <ColorSchemesExample/>
        <h1>Welcome to Contact screen</h1>
        <input type="text" placeholder="comment Your problem"/>
        </>
    )
}
export default ContactSCreen;