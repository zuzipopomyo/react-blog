import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef, useState } from "react";
import { Context } from "../../components/context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    const username = userRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        username,
        password,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setError(null); // Reset error state on successful login
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(err.response.data.error || "Something went wrong."); // Display specific error message from backend response
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="login">
      <div className="loginTitle">Login</div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        {error && <span className="loginError">{error}</span>}
        <button className="loginBtn" type="submit" disabled={isFetching}>
          {isFetching ? "Logging in..." : "Login"}
        </button>
      </form>
      <button className="registerBtn">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}
