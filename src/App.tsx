import { useState } from "react";
import "./App.css";

type countType = "UP" | "DOWN";

function App() {
  const [count, setCount] = useState(0);

  function handleClick(type: countType) {
    const newValue = type === "UP" ? count + 1 : count - 1;
    setCount(newValue);
    console.log("Hola ", newValue);
  }

  return (
    <>
      <main>
        <section id="title">
          <h1 className="text-3xl font-bold underline mb-5">Hello world!</h1>
        </section>

        <section>
          <div className="flex justify-center items-center gap-4">
            <button
              type="submit"
              onClick={() => handleClick("UP")}
              className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Increase
            </button>

            <button
              type="submit"
              onClick={() => handleClick("DOWN")}
              className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Decrease
            </button>
          </div>

          <div className="mt-6">
            <p className="text-red-900 font-bold">{count}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
