import React, { useState } from "react";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className="main-container">
        <div className="image-wrapper">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd920615-a09b-45ac-8454-71e12a613401?apiKey=5aea209633a743968e186ed24c6841a0&"className="image"
            alt="Login Image"
          />
          <div className="title">Log ind</div>
          <div className="description">Email</div>
          <input
            type="email"
            className="spacer"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="description">Password</div>
          <input
            type="password"
            className="spacer"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="login-button" onClick={handleSubmit}>
            Log ind
          </button>
        </div>
      </div>
      <style jsx>{`
        .main-container {
          align-items: center;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 0 20px;
          overflow: hidden;
        }

        .image-wrapper {
          display: flex;
          width: 436px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          margin: 261px 0 309px;
        }

        @media (max-width: 991px) {
          .image-wrapper {
            margin: 40px 0;
          }
        }

        .image {
          aspect-ratio: 4.53;
          object-fit: contain;
          object-position: center;
          width: 272px;
          max-width: 100%;
        }

        .title {
          color: #000;
          margin-top: 63px;
          white-space: nowrap;
          font: 600 33px/43px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .title {
            margin-top: 40px;
            white-space: initial;
          }
        }

        .description {
          color: var(--8A92A6-Text-Color-2, #8a92a6);
          align-self: stretch;
          margin-top: 16px;
          white-space: nowrap;
          font: 400 16px/28px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .description {
            max-width: 100%;
            white-space: initial;
          }
        }

        .spacer {
          align-items: center;
          border-radius: 4px;
          border: 1px solid var(--3A57E8-Primary, #3a57e8);
          background-color: var(--FFFFFF-Bg-1, #fff);
          align-self: stretch;
          display: flex;
          margin-top: 8px;
          height: 44px;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .spacer {
            max-width: 100%;
          }
        }

        .login-button {
          color: var(--FFFFFF-Bg-1, #fff);
          text-align: center;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          background-color: #3a57e8;
          margin-top: 68px;
          width: 188px;
          max-width: 100%;
          padding: 8px 20px;
          font: 400 16px/28px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .login-button {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default LoginForm;