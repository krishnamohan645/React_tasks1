import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import "./index.css"
class CustomSpinner extends Component {
  render() {
    return (
        <div className="spinner">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      </div>
    );
  }
}

export default CustomSpinner;
