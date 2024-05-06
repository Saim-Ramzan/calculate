import { useState } from "react";
import "./App.css";
import Button from "./component/Button";

function App() {
  const [value, setValue] = useState("");
  const values = ["AC","%","DEL","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0",".","=",];

  const evalute = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };
  const eventHandel = (value) => {
    if (value === "AC") {
      setValue("");
    } else if (value === "=") {
      evalute();
    } else if (value === "DEL") {
      setValue((prevValue) => prevValue.slice(0, -1));
    } else if (value === "%") {
      setValue((prevValue) => (prevValue / 100).toString());
    } else {
      setValue((prevValue) => prevValue + value);
    }
  };
  const isOperator = (val) => {
    return isNaN(val) && val !== ".";
  };
  return (
    <>
      <div className="-ml-7 flex flex-col bg-black main-container rounded-lg">
        <input
          className="w-80 p-2 h-20 text-right text-4xl outline-none font-bold rounded-lg "
          type="text"
          value={value}
          placeholder="0"
          readOnly
        />
        <div className="flex gap-3 w-80  flex-wrap justify-between mt-4">
          {values.map((value) => (
            <div
              onClick={() => eventHandel(value)}
              style={{}}
              className={`w-16 h-16 flex justify-center items-center rounded-full cursor-pointer text-xl font-bold ${
                isOperator(value) ? "bg-orange-500" : "bg-slate-500"
              }`}
              key={value}
            >
              <Button value={value} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

// else if (value === "%") {
//   setValue((prevValue) => (prevValue / 100).toString());
// }
