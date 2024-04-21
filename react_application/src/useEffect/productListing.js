import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const UseEffectProducts = () => {
  const [data, setData] = useState([]);
  const [eachObject, setEachObject] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    gettingSingleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products); // Update state with products array
      console.log('response: ', response);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  const gettingSingleData = async () => {
    try {
      const result = await axios.get(`https://dummyjson.com/products/${count}`);
      setEachObject(result.data); // Update state with single product object
      console.log('result: ', result);
    } catch (error) {
      console.log("Not Getting single Item:", error);
    }
  };

  const handleButtonClick = (id) => {
    setCount(id);
  };

  return (
    <div className="container">
      <h1 className="title">Product Viewer</h1>
      <div className="product-list">
        {data.map((product) => (
          <button
            key={product.id}
            className={`product-button ${
              count === product.id ? "active" : ""
            }`}
            onClick={() => handleButtonClick(product.id)}
          >
            {product.id}
          </button>
        ))}
      </div>
      <div className="card">
        <h1>{eachObject.title}</h1>
        <img src={eachObject.thumbnail} alt={eachObject.title} />
        <p className="description">{eachObject.description}</p>
        <h2>Price: {eachObject.price}</h2>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default UseEffectProducts;
