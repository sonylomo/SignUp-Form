import React, { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(
            `Username: ${username}, E-mail: ${email}, Password: ${password}`
        );
    }

    return (
        <div className="login_text">
            <h1>Sign Up</h1>
            <form>
                <input
                    className="texts"
                    type="text"
                    name="Username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="texts"
                    type="email"
                    name="Email"
                    placeholder="Enter E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="texts"
                    type="password"
                    name="Password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="submit"
                    name="Submit"
                    value="Sign Up"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    );
}

export default SignUp;
