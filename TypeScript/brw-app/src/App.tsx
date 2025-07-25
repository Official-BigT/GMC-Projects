// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import CardDetails from "./components/CardDetails";
import Theme from "./components/Theme";

function App() {
  // const [count, setCount] = useState(0)
  type GreetingProps = {
    myName: string;
  };

  const Greeting = ({ myName }: GreetingProps) => {
    return <h1>Hello, {myName}!</h1>;
  };
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <Greeting myName="BigT" />

      <CardDetails title="Pilot Season"/>

      <Theme/>
    </>
  );
}

export default App;
