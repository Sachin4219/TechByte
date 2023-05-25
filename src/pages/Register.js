import styles from "./Register.module.css";
import transparent from "../assets/transparent.png";
import axios from "axios";
import { Link } from "react-router-dom";
// import {useNavigate} from "react-router-dom"
import { base_url } from "../assets/data";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../assets/profile.png";
import { MdModeEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postImage, setPostImage] = useState("");
  const [bio, setBio] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = base_url + "register";
    try {
      const response = await axios.post(url, {
        name,
        username,
        photo: postImage,
        bio,
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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (file) {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        return undefined;
      }
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
    console.log(base64);
  };

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.heading}>
        <img src={transparent} alt="website logo"></img>
        <h1>Register on Everypost</h1>
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formElement}>
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={postImage || profile}
            />
            <div className="flex gap-10 px-3 pb-2 items-center">
              <label
                htmlFor="profilephoto"
                className="w-fit px-1 pb-1 text-gray-600"
              >
                <MdModeEdit className="text-2xl" />
              </label>
              <ImCross
                className="text-gray-500 text-3xl"
                onClick={() => setPostImage("")}
              />
            </div>
            <input
              className="hidden"
              type="file"
              id="profilephoto"
              label="Image"
              name="myFile"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="DuckyMoMo"
            />
          </div>
          <div className={styles.formElement}>
            <label htmlFor="bio">Your Bio</label>
            <textarea
              type="text"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Once upon a summer a rich man went to verona saw two young gentlemen and called it a day"
            ></textarea>
          </div>
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
          <Link to="/login">Already have an account ?</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
