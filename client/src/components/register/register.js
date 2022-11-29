import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./register.css";
import Earth from "../../assets/earth.png";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const generateError = (error) =>
    toast.error(error, { position: "bottom-right", theme: "dark" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/",
        { ...values },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { username, email, password } = data.errors;

          if (username) generateError(username);
          else if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          // navigate("/energymgr");
          // window.location.href = "/energymgr";
          window.open(
            "https://vedantyetekar7.github.io/energy-manager-app/",
            "target:_blank"
          );
          toast.success("Registration Successful", {
            position: "top-right",
            theme: "dark",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main_container">
      <div className="heading_container">
        <h3>Watt Analyzer</h3>
      </div>
      <div className="form_container">
        <h2>Create an account</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              name="username"
              placeholder="Username"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <div className="globe_container">
        <img alt="earth" className="save_earth" src={Earth} width="200px" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
