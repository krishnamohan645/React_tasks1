import ProductsFetching from "../components/products";
import ColorSchemeExample from "../components/header"
import "./pages.css"
import { useContext } from "react";
import { DataShare } from "../navigation-stack/navigation-stack";
const Listing =()=>{
    const {data,changeColor}=useContext(DataShare)
    return(

        <div className="list">
                    <h1 style={data}>hii</h1>
        <button onClick={changeColor}> changeColor</button> 
            <ColorSchemeExample/>
        <h1>Recipes Hub</h1>
        <ProductsFetching/>
        </div>
    )
}

export default Listing;