import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body class="flex flex-col justify-center items-center h-screen ">
      <div class="mb-4">
        <h1 className="text-3xl font-bold text-blue-500 text-center">
          Hello world from TailwindCSS
        </h1>
        <h4 className="text-1xl font-bold text-blue-500 text-center">
          Press the button to increase the count
        </h4>
      </div>

      <div class="whitespace-pre">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </body>
  );
}

export default App;
