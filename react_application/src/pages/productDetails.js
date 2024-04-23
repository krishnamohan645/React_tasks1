import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ColorSchemesExample from "../components/header"


const ProductDetails = ()=>{
    const card ={
        border: "2px solid black",
        borderRadius: "6px",
        margin: "400px",
        marginTop: "40px",
        textAlign: "center",
    }
    const [recipe,setRecipe] = useState([])
    const {recipeId} = useParams()

    useEffect(()=>{
        FecthingEachObject()
    })
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
            <h1 style={{textAlign:"center"}}>Recipe details</h1>
        <div style={card}>
            <br ></br>
            <h2>{recipe?.name}</h2>
            <img src={recipe?.image} alt={recipe?.name} width={150} style={{borderRadius:"50%"}}
            />
            <h2 style={{textDecoration:"underline", marginTop:"10px"}}>Instructions</h2>
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