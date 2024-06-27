/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import man from "./Images/man.png";
import women from "./Images/woman.png";
import bussiness from "./Images/bussiness-man.png";
import girl from "./Images/girl.png";
import office from "./Images/office-man.png";
import employee from "./Images/man1.png";
function App() {
  return (
    <div className="App">
      <div className="main">
        <img
          src="https://www.aleaitsolutions.com/wp-content/uploads/2018/04/map-1.svg"
          alt="map-image"
          className="world-img"
        />
        <div className="country-area">
          <div className="country-1">
            <img src={man} className="person-img" />
          </div>
          <div className="country-2">
            <img src={women} className="person-img" />
          </div>
          <div className="country-3">
            <img src={bussiness} className="person-img" />
          </div>
          <div className="country-4">
            <img src={girl} className="person-img" />
          </div>
          <div className="country-5">
            <img src={office} className="person-img" />
          </div>
          <div className="country-6">
            <img src={office} className="person-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
