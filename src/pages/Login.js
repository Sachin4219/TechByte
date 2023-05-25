import styles from "./Login.module.css";
import transparent from "../assets/transparent.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { base_url } from "../assets/data";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = base_url + "login";
    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      if (response.data.success) {
        document.cookie = `token=${response.data.response.token}`;
        localStorage.setItem("token", response.data.response.token);
        localStorage.setItem("photo", response.data.response.photo);
        localStorage.setItem("name", response.data.response.name);
        localStorage.setItem("email", response.data.response.email);
        window.location.replace("/");
      } else {
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.heading}>
        <img src={transparent} alt="website logo"></img>
        <h1>Login to Everypost</h1>
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formElement}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@example.com"
            />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
        <div className={styles.links}>
          <Link>Forgot your password ?</Link>
          <Link to="/register">Don't have an account ?</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
