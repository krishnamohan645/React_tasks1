import { Component } from "react";

class ButtonComponent extends Component {
  constructor() {
    super();
    this.state = {
      isSubscribe: false,
      text1: "subscribe",
      text2: "subscribed",
      fruits: [
        {
          name: "banana",
          image: "https://www.bing.com/th?id=OIP.O8lKDwWSZP_Cfm8eeyw3wAHaFu&w=121&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        },
        {
          name: "apple",
          image: "https://th.bing.com/th?id=OIP.hVjhVt5EiigNSJr1QK93AAHaIJ&w=238&h=262&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        },
      ],
    };
  }
  changeSubscribe = () => {
    console.log("clicked");
    this.setState({
      isSubscribe: !this.state.isSubscribe,
    });
  };
  addFruit = () => {
    const newFruits = [...this.state.fruits, { name: "pineapple", image: "https://th.bing.com/th?id=OIP.l4Y-ChS2nK7qLJJTeoH7GwHaN6&w=182&h=342&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" }];
    this.setState(
      {
        fruits: newFruits,
      },
      () => {
        console.log(this.state.fruits, "inside setState");
      }
    );
    console.log(this.state.fruits, "outside setState");
  };
  deleteFruit = (index) => {
    console.log(index);
    const newFruits = this.state.fruits.filter((eachFruit, i) => i !== index);
    console.log(newFruits);
    this.setState({
      fruits: newFruits,
    });
  };
  updateFruit = (index) => {
    const newFruits = this.state.fruits.map((eachElement, i) => {
      if (i === index) {
        return { ...eachElement, name: "PineApple", image: "https://th.bing.com/th?id=OIP.l4Y-ChS2nK7qLJJTeoH7GwHaN6&w=182&h=342&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" };
      } else {
        return eachElement;
      }
    });
    this.setState({
      fruits: newFruits,
    });
    console.log(newFruits);
  };
  render() {
    return (
      <div>
        <button
          style={{ color: this.state.isSubscribe ? "red" : "green" }}
          onClick={this.changeSubscribe}
        >
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>
        {this.state.isSubscribe ? (
          <>
            <h3>Welcome user</h3>
            <button onClick={this.addFruit}>Add Fruit</button>
            <ol>
              {this.state.fruits.map((fruit, index) => (
                <li key={index}>
                  <h3>{fruit.name}</h3>
                  <img src={fruit.image} alt={fruit.name} width="100" />
                  <button onClick={() => this.deleteFruit(index)}>
                    delete
                  </button>
                  <button onClick={() => this.updateFruit(index)}>
                    update
                  </button>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <h3>Please subscribe to see the content</h3>
        )}
      </div>
    );
  }
}

export default ButtonComponent;
