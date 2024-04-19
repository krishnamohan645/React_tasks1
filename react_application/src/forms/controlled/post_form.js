import { useState } from "react";
import axios from "axios";
import "./index.css";

const ControlledComponents1 = () => {
    const [formErrors, setFormErrors] = useState({
        usernameErr: "",
        passwordErr: ""
    });

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const { value, name } = event.target;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));

        switch (name) {
            case "username":
                if (value.length < 6 || value.length > 10) {
                    setFormErrors({ ...formErrors, usernameErr: "Invalid username" });
                } else {
                    setFormErrors({ ...formErrors, usernameErr: "" });
                }
                break;
            case "password":
                if (value.length < 6 || !/[A-Z]/.test(value) || value.length > 10) {
                    setFormErrors({ ...formErrors, passwordErr: "Invalid password" });
                } else {
                    setFormErrors({ ...formErrors, passwordErr: "" });
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { username, password } = form;

        const userDetails = {
            username: username,
            password: password
        };

        try {
            const response = await axios.post('https://dummyjson.com/auth/login', userDetails);
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-container">
                <label>Username:</label>
                <input type="text" value={form.username} name="username" onChange={onChangeHandler} />
                {formErrors.usernameErr && <span style={{ color: "red" }}>{formErrors.usernameErr}</span>}
                <label>Password:</label>
                <input type="password" value={form.password} name="password" onChange={onChangeHandler} />
                {formErrors.passwordErr && <span style={{ color: "red" }}>{formErrors.passwordErr}</span>}
                <button type="submit">Login</button>
                <a href="/">Forgot Password</a>
            </form>
        </div>
    );
};

export default ControlledComponents1;
