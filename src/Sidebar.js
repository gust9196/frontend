import React from "react";
import { useNavigate } from 'react-router-dom';
import './sidebar.css';


function Sidebar(props) {

  let navigate = useNavigate();

  const handleButtonClick = (endpoint) => {
    navigate(endpoint);
  };
 
  return (
    <>
      <div className="sb-main-container">
        <div className="sb-image-wrapper">
          <img className="sb-logo" onClick={() => handleButtonClick('/')} 
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c44ed3-454d-4064-b434-2edf48aab9e2?apiKey=5aea209633a743968e186ed24c6841a0&"
          />
        </div>
          <button className="sb-description" onClick={() => handleButtonClick('/new-agreement')}>
            Register ny aftale
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/new-car')}>
            Register ny bil
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/new-customer')}>
            Register ny kunde
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/leaseagreementlist')}>
            Nuværende aftaler
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/damage-repair')}>
            Skade og udbedring
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/analytics')}>
            Analytics
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/customerslist')}>
            Kunder
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/carlist')}>
            Biler
          </button>
          <button className="sb-description" onClick={() => handleButtonClick('/car-administration')}>
            Biladministration
          </button>
          <button className="sb-title" onClick={() => handleButtonClick('/login')}>
            Log ud
          </button>
      </div>
    </>
  );
}
 
export default Sidebar;
