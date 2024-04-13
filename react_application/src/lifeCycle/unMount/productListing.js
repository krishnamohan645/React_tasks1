import { Component } from "react";
import "./index.css";
import axios from "axios"
import CustomSpinner from "./spinner";

class ProductListing extends Component{
    state={
        products:[]
    }


    componentDidMount(){
        this.fetchData();
    }
        
    
    fetchData =async()=>{
        const result = await axios.get("https://dummyjson.com/products")
        console.log(result)

        this.setState({
            products:result.data.products
        })
    }
    render(){
        console.log(this.state.products,"log from render")
        return(
            <>
            <h1>Product Listing</h1>
            {
                this.state.products.length>0
                ?
                <div className="productList">
                    {
                        this.state.products.map(eachObject=>{
                           const {description,title,thumbnail,price}=eachObject
                            return(
                                <div className="cards">
                                    <img src={thumbnail} alt={title} width={200} height={200}/>
                                    <h3>{title}</h3>
                                    <h4>{description}</h4>
                                    <button style={{color: "white", backgroundColor: "red", width: "100px", padding: "10px",borderRadius: "10px"}}>₹{price}</button>
                                </div>
                            )
                        })
                    }
                </div>
                : 
                <CustomSpinner/>
            }
            </>
        )
    }
}

export default ProductListing;