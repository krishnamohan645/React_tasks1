import React, { Component } from "react";

class AddingFruits extends Component {
  state = {
    fruits: [
      {
        name: "Apple",
        image:
          "https://th.bing.com/th?id=OIP.HySrCJe7ATbkNjvwko8rwQHaIZ&w=234&h=266&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      },
      {
        name: "Mango",
        image:
          "https://th.bing.com/th?id=OIP.b3fzCzEek1R_6Z10xSvICgHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      },
    ],
  };

  AddingFruits = () => {
    const newFruits = [
      ...this.state.fruits,
      {
        name: "Pineapple",
        image:
          "https://th.bing.com/th?id=OIP.l4Y-ChS2nK7qLJJTeoH7GwHaN6&w=182&h=342&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      },
    ];
    this.setState({ fruits: newFruits });
  };

  DeleteFruits = () => {
    const delFruits = [...this.state.fruits];
    delFruits.pop();
    this.setState({ fruits: delFruits });
  };

  render() {
    return (
      <>
        <button onClick={this.AddingFruits}>Add Fruit</button>
        <button onClick={this.DeleteFruits}>Delete Fruit</button>
        {this.state.fruits.map((fruit, index) => (
          <div key={index}>
            <h3>{fruit.name}</h3>
            <img
              src={fruit.image}
              alt={fruit.name}
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </>
    );
  }
}

export default AddingFruits;
