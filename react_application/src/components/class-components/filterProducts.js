import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import CustomLoader from "./spinner";

class ProductListing extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      originalProducts: [],
      products: [],
      favouriteColor: "orange",
      style: {
        marginLeft: "50px",
        borderRadius: "10px",
        padding: "10px",
        color: "white",
        backgroundColor: "red",
        fontSize: "15px"
      },
    };
    this.lowToHigh = this.lowToHigh.bind(this);

    this.filterByPrice = this.filterByPrice.bind(this);
    this.resetProducts = this.resetProducts.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.fetchData();
  }
  lowToHigh = () => {
    const lowToHighProducts = [...this.state.products].sort(
      (a, b) => a.price - b.price
    );
    this.setState({
      products: lowToHighProducts,
    });
  };

  highToLow = () => {
    const highToLowProduts = [...this.state.products].sort(
      (a, b) => b.price - a.price
    );
    this.setState({
      products: highToLowProduts,
    });
  };

  filterByPrice() {
    const filteredProducts = this.state.products.filter(
      (product) => product.price >= 100 && product.price <= 500
    );
    this.setState({
      products: filteredProducts,
    });
  }

  resetProducts() {
    this.setState({
      products: this.state.originalProducts,
    });
  }
  fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    const originalProducts = result.data.products;
    this.setState({
      products: originalProducts,
      originalProducts: originalProducts,
    });
  };

  render() {
    return (
      <>
        <h1 style={{ color: this.state.favouriteColor }}>Product Listing</h1>
        <button onClick={this.lowToHigh} style={this.state.style}>Low to high</button>
        <button onClick={this.highToLow}  style={this.state.style}>
          High to Low
        </button>
        <button onClick={this.filterByPrice}  style={this.state.style}>
          100 - 500
        </button>
        <button onClick={this.resetProducts}  style={this.state.style}>
          reset
        </button>
        <h2>Total Amount:</h2>
        {this.state.products.length > 0 ? (
          <div className="productList">
            {this.state.products.map((eachObject) => {
              const { title, thumbnail, price, id } = eachObject;
              return (
                <React.Fragment key={id}>
                  <div className="cards">
                    <img src={thumbnail} alt={title} width={100} height={100} />
                    <h3>{title}</h3>
                    <h4 style={{ color: "red" }}>₹{price}</h4>
                    <span style={{display:"block"}}>Total Price:</span>
                    <button>-{}</button>
                    <span style={{marginLeft:"10px", marginRight:"10px"}}>count</span>
                    <button>+{}</button>
                    <button >Add</button>
                    <button >Update</button>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          <CustomLoader />
        )}
      </>
    );
  }
}

export default ProductListing;
