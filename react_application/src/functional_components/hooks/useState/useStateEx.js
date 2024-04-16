import {  useState } from "react";
import React from "react";
import axios from "axios";
import "./useState.css"

const UseStateExample=()=>{
    const [products, setProducts] = useState([])



   const updateProduct=()=>{
    const updatedProducts = [...products]
    
    console.log(updatedProducts)
    }
    
    const fetchData = async()=>{
        const result = await axios.get("https://dummyjson.com/products")
        console.log(result)
        setProducts(result.data.products)
    }
    useState(()=>{
        fetchData()
    },[])
    return(
        <>
        <div className="container">
           {
            products.map((eachObject,index)=>{
                return(
                    <div className="cards" key={index}>
                    <img src={eachObject.thumbnail} alt={eachObject.title} width={250} height={250}/>
                    <h3 key={index}>{eachObject.title}</h3>
                    <h3>₹{eachObject.price}</h3>
                    <button>Delete</button>
                    <button onClick={updateProduct} style={{marginLeft:"10"}}>Update</button>
                    </div>
                )
            })
           }
        </div>
        </>
    )
}
export default UseStateExample;