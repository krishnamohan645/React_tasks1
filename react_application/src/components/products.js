import axios from "axios";
import { useEffect, useState } from "react";
import "./header.css"
import { Link } from "react-router-dom";
const ProductsFetching =()=>{
    const [recipe, setRecipe] = useState([])


    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        try{
            const response = await axios.get("https://dummyjson.com/recipes");
            if(response.status===200){
                setRecipe(response.data.recipes)
            }
        }catch(error){
            console.log("error fetching data:", error)
        }
    } 
    return(
        <div className="products">
            {
                recipe.length>0 ?
                (
                    recipe.map((eachItem)=>{
                        const {image, name,rating,id}=eachItem
                        return(
                            <div className="card" key={id}>
                                <h2>Name:{name}</h2>
                                <img src={image} alt={name} width={300}
                                />
                                <h2>Rating:{rating}</h2>
                                <button ><Link to={`${name}/${id}`}>
                                See More
                                </Link>
                                    
                                </button>
                            </div>
                        )
                    })
                ):(
                    <h1>LoaderFunctionArgs...</h1>
                )
            }
        </div>
    )
}
export default ProductsFetching;