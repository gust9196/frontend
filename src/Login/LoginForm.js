import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loginstyle.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Udfyld venligst alle felter");
      return;
    }

    try {
      const response = await axios.get(
        `babackenddbapi.azurewebsites.net/user/loginCheck?email=${encodeURIComponent(
          email,
        )}&password=${encodeURIComponent(password)}`,
      );
      if (response.data.valid) {
        props.onLogin(true);
        navigate("/");
        setError("");
      } else {
        setError("Email eller kodeord er forkert");
      }
    } catch (error) {
      console.error("Login fejl", error);
      setError("Der opstod en fejl ved login");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="image-wrapper">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&"
            className="image"
            alt="Login Image"
          />
          <div className="title">Log ind</div>
          <div className="description">Email</div>
          <input
            type="email"
            className="userEmail"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="description">Password</div>
          <input
            type="password"
            className="userPassword"
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <div className="error-message">{error}</div>}
          <button className="login-button" onClick={handleSubmit}>
            Log ind
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
