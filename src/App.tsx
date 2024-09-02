import { useState } from "react";
import "./App.css";

type countType = "UP" | "DOWN";

function App() {
  /**
   * 1. Start Counter project
   */
  const [count, setCount] = useState(0);

  function handleClick(type: countType) {
    const newValue = type === "UP" ? count + 1 : count - 1;
    setCount(newValue);
  }

  /**
   * 2. Start realtime-input project
   */
  const [myInputValue, setMyInputValue] = useState("");

  function handleMyInput(value: string) {
    setMyInputValue(value);
  }
  /**
   * End  realtime-input project
   ******************************/

  return (
    <>
      <main>
        <section id="title">
          <h1 className="text-3xl font-bold underline mb-5">Hello world!</h1>
        </section>

        <section className="hidden" id="counter-project">
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

        <section id="realtime-input">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  value={myInputValue}
                  onChange={(e) => handleMyInput(e.target.value)}
                  id="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 px-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center font-bold text-xl">{myInputValue}</div>
        </section>
      </main>
    </>
  );
}

export default App;
