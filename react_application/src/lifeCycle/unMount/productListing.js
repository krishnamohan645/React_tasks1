import { Component } from "react";
import "./index.css";
import axios from "axios";
import CustomSpinner from "./spinner";

class ProductListing extends Component {
  state = {
    products: [],
    counts: [],
    totalAmount: 0
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    const result1 = result.data.products.map((val) => {
      return { ...val, TotalPrice: val.price };
    });
    const initialCounts = Array(result1.length).fill(0); 
    this.setState({
      products: result1,
      counts: initialCounts,
      totalAmount: 0
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
      const updatedTotalAmount = prevState.totalAmount + prevState.products[index].TotalPrice;
      return { counts: updatedCounts, totalAmount: updatedTotalAmount };
    });
  };

  decrementCount = (index) => {
    this.setState((prevState) => {
      const updatedCounts = [...prevState.counts];
      if (updatedCounts[index] > 0) {
        updatedCounts[index]--;
      }
      const updatedTotalAmount = Math.max(prevState.totalAmount - prevState.products[index].TotalPrice, 0);
      return { counts: updatedCounts, totalAmount: updatedTotalAmount };
    });
  };

  render() {
    return (
      <>
        <h1>Product Listing</h1>
        <h3>Total Amount: ₹{this.state.totalAmount}</h3>
        {this.state.products.length > 0 ? (
          <div className="productList">
            {this.state.products.map((product, index) => {
              const { title, thumbnail, price, TotalPrice } = product;
              const originalPrice = TotalPrice;
              const totalCount = this.state.counts[index];
              const totalPrice = totalCount > 0 ? totalCount * originalPrice : originalPrice;
              return (
                <div className="cards" key={index}>
                  <img src={thumbnail} alt={title} width={150} height={150} />
                  <h3>{title}</h3>
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      width: "100px",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    ₹{price}
                  </button>
                  <div>
                    <span>Total Price: ₹{totalPrice}</span>
                  </div>
                  <div className="btn">
                    <button onClick={() => this.decrementCount(index)}>-</button>
                    <span>{this.state.counts[index]}</span>
                    <button onClick={() => this.incrementCount(index)}>+</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <CustomSpinner />
        )}
      </>
    );
  }
}

export default ProductListing;





