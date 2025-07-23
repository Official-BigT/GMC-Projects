// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import bigtLogo from "./assets/bigt logo.png";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Football from "./components/Football";
// import Product from "./components/product";
import Movies from "./components/Movies";
import MoviePage from "./pages/MoviePage";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Task from "./components/Task";

function App() {
  // const [count, setCount] = useState(0);
  // const [name, setName] = useState();
  // const shout = () => {
  //   alert("Big T is the GOAT!");
  // };

  
  function createMyForm() {
    let input = <input type="text" placeholder="Name" />;
    let button = <button>Submit</button>;
    return (
      <form>
        {input}
        <br />
        {button}
      </form>
    );
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path= "/movie/:id" element={<MoviePage/>} />
      </Routes>
    </BrowserRouter>

      {/* <Football/> */}

      {/* <div>{createMyForm()}</div> */}

      {/* <Product/> */}

      <div>
        <h1>My ToDo App</h1>
        <p>Welcome to my ToDo app built with React and Redux!</p>
        <AddTask/>
        {/* <Task/> */}
        <ListTask/>
      </div>

      <div className="footer">
        <p>Made with ❤️ by Official Big T</p>
      </div>
    </>
  );
}

export default App;
