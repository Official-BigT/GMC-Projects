// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import bigtLogo from "./assets/bigt logo.png";
// import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/product";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState();
  // const shout = () => {
  //   alert("Big T is the GOAT!");
  // };

  function createMyForm () {

  let input = <input type="text" placeholder="Name" />;
  let button = <button>Submit</button>;
  return(
    <form>
      {input}
      <br />
      {button}
    </form>
  );
  }

  return (
    <>
    {/* //Default component area */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/Official-BigT" target="_blank">
          <img
            src={bigtLogo}
            className="logo bigt"
            alt="React logo"
          />
        </a>
      </div>
      <h1>
        Vite + React + <span onClick={shout}>BigT</span>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Big T logos to learn more
      </p> */}

      


      {/* <div>{createMyForm()}</div> */}
      
      <Product/>

      <div className="footer">
        <p>Made with ❤️ by Official Big T</p>
      </div>
    </>
  );
}

export default App;
