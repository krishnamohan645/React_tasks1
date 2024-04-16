import { useState } from "react";
import axios from "axios";

const UseStateExample=()=>{
    const [products, setProducts] = useState()

    fetchData = async()=>{
        const result = await axios.get("")
        console.log(result)
        setProducts(products)
        this.setProducts({
            products:result.data.products
        })
    }
    return(
        <>
        <div className="cards">
           {
            products.map((eachObject,index)=>{
                return(
                    <h1>{products.title}</h1>
                )
            })
           }
        </div>
        </>
    )
}
export default UseStateExample;