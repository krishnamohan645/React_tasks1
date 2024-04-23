import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ColorSchemesExample from "../components/header"


const ProductDetails = ()=>{
    const card ={
        border: "2px solid black",
        borderRadius: "6px",
        margin: "400px",
        marginTop: "100px",
        textAlign: "center"
    }
    const [recipe,setRecipe] = useState([])
    const {recipeId} = useParams()

    useEffect(()=>{
        FecthingEachObject()
    },[])
    const FecthingEachObject =async()=>{
        try{
            const result = await axios.get(`https://dummyjson.com/recipes/${recipeId}`)
            console.log(result.data)
            if(result.status===200){
                setRecipe(result.data)
            }
        }catch(error){
            console.log("error",error)
        }
    }
    return(
        <>
            <ColorSchemesExample/>
        <div style={card}>
            <h1 style={{textDecoration:"underline"}}>Recipe details</h1>
            <br ></br>
            <h2>Name: {recipe?.name}</h2>
            <img src={recipe?.image} alt={recipe?.name} width={240}
            />
            <h2 style={{textDecoration:"underline"}}>Instructions</h2>
            {
                recipe?.instructions?.map((eachItems, index)=>{
                    return(
                        <ul key={index} style={{textAlign:"start"}}>
                            <li>{eachItems}</li>
                        </ul>
                    )
                })
            }
        </div>
        </>
    )
}

export default ProductDetails