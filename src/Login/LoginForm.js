import React, { useState } from "react";
import "./loginstyle.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
      } else {
      }
    } catch (error) {}
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
          <button className="login-button" onClick={handleSubmit}>
            Log ind
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
