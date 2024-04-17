import { useRef, useState } from "react";




const UnControlledInput = () => {
  const [submitedData, setSubmittedData] = useState([]);
  const [errorVisible, setErrorVisible] = useState(false);
  const userNameRef = useRef("");
  const passwordRef = useRef("");
  // const confirmPasswordRef = useRef("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user submited");

    const userInput = userNameRef.current.value;
    const passwordInput = passwordRef.current.value;
    // const confirmPasswordInput = confirmPasswordRef.current.value
    setSubmittedData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        username: userInput,
        password: passwordInput,
      },
    ]);
    userNameRef.current.value = "";
    passwordRef.current.value = "";
    // confirmPasswordRef.current.value =""
    // console.log(confirmPasswordInput)
    if (userInput.length < 5 && passwordInput.length < 5) {
      setErrorVisible(true);
    } else {
      const newObj = {
        username: userInput,
        password: passwordInput,
      };
      setErrorVisible(false);
      console.log("submit form", newObj);
    }
  };
  return (
    <div className="container">
        <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            ref={userNameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            ref={passwordRef}
          />
        </div>
        {errorVisible && (
          <span style={{ color: "red" }}>
            User name and password must be greter than 5
          </span>
        )}
        <div className="form-check mb-3"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
<div className="table-container">
      {submitedData.length < 5 && (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>

          <tbody>
            {submitedData.map(
              (data) =>
                data.username.length >= 5 &&
                data.password.length >= 5 && (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.username}</td>
                    <td>{data.password}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default UnControlledInput;
