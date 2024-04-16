import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import CustomLoader from "./spinner";

class ProductListing extends Component {
  constructor() {
    super();
    this.state = {
      originalProducts: [],
      products: [],
      counts: [],
      totalAmount: 0,
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
    const highToLowProducts = [...this.state.products].sort(
      (a, b) => b.price - a.price
    );
    this.setState({
      products: highToLowProducts,
    });
  };

  filterByPrice = () => {
    const filteredProducts = this.state.products.filter(
      (product) => product.price >= 100 && product.price <= 500
    );
    this.setState({
      products: filteredProducts,
    });
  };

  resetProducts = () => {
    const initialCounts = Array(this.state.originalProducts.length).fill(0);
    this.setState({
      counts: initialCounts,
      totalAmount: 0,
    });
  };


  fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    const originalProducts = result.data.products.map((val) => {
      return { ...val, TotalPrice: val.price };
    });
    const initialCounts = Array(originalProducts.length).fill(0);
    this.setState({
      products: originalProducts,
      originalProducts: originalProducts,
      counts: initialCounts,
      totalAmount: 0,
    });
  };

  updateTotalAmount = () => {
    const { products, counts } = this.state;
    let totalAmount = 0;
    for (let i = 0; i < products.length; i++) {
      totalAmount += products[i].TotalPrice * counts[i];
    }
    this.setState({ totalAmount });
  };

  incrementCount = (index) => {
    this.setState((prevState) => {
      const updatedCounts = [...prevState.counts];
      updatedCounts[index]++;
      const updatedTotalAmount =
        prevState.totalAmount + prevState.products[index].TotalPrice;
      return { counts: updatedCounts, totalAmount: updatedTotalAmount };
    });
  };

  decrementCount = (index) => {
    this.setState((prevState) => {
      const updatedCounts = [...prevState.counts];
      if (updatedCounts[index] > 0) {
        updatedCounts[index]--;
        const updatedTotalAmount = Math.max(
          prevState.totalAmount - prevState.products[index].TotalPrice,
          0
        );
        return { counts: updatedCounts, totalAmount: updatedTotalAmount };
      }
      return prevState;
    });
  };

  deleteItem = (index)=>{
    const newItems = this.state.products.filter((eachObject, i)=> i !==index);
    this.setState({
      products: newItems
    })
  }

  updateItem = (index, updatedTitle, updatedThumbnail) => {
    const newProducts = [...this.state.products];
    if (index >= 0 && index < newProducts.length) {
      newProducts[index] = {
        ...newProducts[index],
        title: updatedTitle,
        thumbnail: updatedThumbnail
      };
      this.setState({ products: newProducts });
    }
  };
  
  
  render() {
    return (
      <>
        <h1 style={{ color: this.state.favouriteColor }}>Product Listing</h1>
        <button onClick={this.lowToHigh} style={this.state.style}>
          Low to high
        </button>
        <button onClick={this.highToLow} style={this.state.style}>
          High to Low
        </button>
        <button onClick={this.filterByPrice} style={this.state.style}>
          100 - 500
        </button>
        <button onClick={this.resetProducts} style={this.state.style}>
          reset
        </button>
        <h2>Total Amount: ₹{this.state.totalAmount}</h2>
        {this.state.products.length > 0 ? (
          <div className="productList">
            {this.state.products.map((product, index) => {
              const { title, thumbnail, price, id, TotalPrice } = product;
              const originalPrice = TotalPrice;
              const totalCount = this.state.counts[index];
              const totalPrice =
                totalCount > 0 ? totalCount * originalPrice : originalPrice;
              return (
                <div className="cards" key={id}>
                  <img
                    src={thumbnail}
                    alt={title}
                    width={100}
                    height={100}
                  />
                  <h3>{title}</h3>
                  <h4 style={{ color: "red" }}>₹{price}</h4>
                  <span style={{ display: "block" }}>
                    Total Price: ₹{totalPrice}
                  </span>
                  <button onClick={() => this.decrementCount(index)}>-</button>
                  <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                    {this.state.counts[index]}
                  </span>
                  <button onClick={() => this.incrementCount(index)}>+</button>
                  <button onClick={()=> this.deleteItem(index)}>Delete</button>
                  <button  onClick={() => this.updateItem(index, "iPhone X", "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg")}>Update</button>
                </div>
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
