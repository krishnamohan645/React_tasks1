import React, { Component } from "react";
import axios  from "axios";
import "./index.css"
import CustomLoader from "./spinner";


class ProductListing extends Component{
    constructor(){
        console.log("constructor")
        super()
        this.state={
            originalProducts:[],
            products:[],
            favouriteColor: "orange"
        }
        this.lowToHigh = this.lowToHigh.bind(this)
        
        this.filterByPrice = this.filterByPrice.bind(this)
        this.resetProducts = this.resetProducts.bind(this)
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.fetchData()
    }
    lowToHigh = () => {
        const lowToHighProducts = [...this.state.products].sort((a, b) => a.price - b.price);
        this.setState({
          products: lowToHighProducts
        });
      };


      highToLow=()=>{
        const highToLowProduts = [...this.state.products].sort((a,b)=>b.price - a.price);
        this.setState({
            products: highToLowProduts
        })
      }
      
  filterByPrice() {
    const filteredProducts = this.state.products.filter(product => product.price >= 100 && product.price <= 500);
    this.setState({
      products: filteredProducts
    });
  }

  resetProducts(){
    this.setState({
        products: this.state.originalProducts
    })
  }
    fetchData = async()=>{
        const result = await axios.get("https://dummyjson.com/products")
        const originalProducts = result.data.products;
        this.setState({
            products: originalProducts,
            originalProducts: originalProducts
        })
    }

    render(){
        return(
            <>
            <h1 style={{color:this.state.favouriteColor}}>Product Listing</h1>
            <button onClick={this.lowToHigh}>Low to high</button>
            <button onClick={this.highToLow}>High to Low</button>
            <button onClick={this.filterByPrice}>100 - 500</button>
            <button onClick={this.resetProducts}>reset</button>
            {
                this.state.products.length>0
                ?
                <div className="productList">
                    {
                        this.state.products.map(eachObject=>{
                            const{title, thumbnail,price,id}=eachObject
                            return(
                                <React.Fragment key={id}>
                                    <div className="cards">
                                        <img src={thumbnail} alt={title} width={100} height={100}/>
                                        <h3>{title}</h3>
                                        <h4 style={{color:"red"}}>₹{price}</h4>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                :
                <CustomLoader/>
            }
            </>
        )
    }

}


export default ProductListing;