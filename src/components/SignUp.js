import React from "react"
import useValidation from "./useValidation"
import Auth from './auth'

function SignUp() {
    const InitialState = {
        username: "",
        email: "",
        password: ""
    }

    //destructure function from custom hook
    const { handleChange, handleSubmit, values, errors, submitted } = useValidation(InitialState, Auth)

    return (
        <div className="signup_text">
            <h1>Sign Up</h1>
            <form>
                <input
                    className="texts"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p className="error-text">{errors.username}</p>}

                <input
                    className="texts"
                    type="email"
                    name="email"
                    placeholder="Enter E-mail"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
                <input
                    className="texts"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
                <input
                    type="submit"
                    name="Submit"
                    value="Sign Up"
                    onClick={handleSubmit}
                    disabled={submitted}
                />
            </form>
        </div>
    );
}

export default SignUp;
