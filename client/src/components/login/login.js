import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./login.css";
import Earth from "../../assets/login_earth.png";
import Birds from "../birds/birds";

const Login = () => {
  const [centerEarth, setCenterEarth] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
      theme: "dark",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        { ...values },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;

          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/energymgr");
          window.location.href = "/energymgr";
          toast.success("Login Successful", {
            position: "top-right",
            theme: "dark",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="birds_login_container">
      {!centerEarth && <Birds />}
      <div className="login_box">
        <div className="login_main_container">
          <div
            className={
              centerEarth
                ? "earth_container_login"
                : "earth_container_login_animation"
            }
          >
            <img alt="earth" src={Earth} />
            {centerEarth && (
              <div>
                <p onClick={() => setCenterEarth(false)}>click me</p>
              </div>
            )}
          </div>
          {!centerEarth && (
            <div
              className={
                centerEarth ? "login_container" : "login_container_animation"
              }
            >
              <h2>Login to your account</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
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
                  Don't have an account? <Link to="/">Register</Link>
                </span>
              </form>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
