import './App.css';
//hooks useState, useEffect
import { useState, useEffect, useReducer } from 'react';


const [first, second, third] = ["Tokyo", "China", "Korea"];

console.log(first);
console.log(second);

//library from index.js
function App({library}) {
  //setEmotion is used to update the emotion state
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  //creating checkbox toggle
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <div className="App">
      <h1>Hello from {library}</h1>
      <h2>Current emotion is {emotion}</h2>
      <button onClick={() => setEmotion("sad")}>SAD</button>
      <button onClick={() => setEmotion("Excited")}>EXCITED</button>
      <button onClick={() => setEmotion("ANGRY")}>ANGRY</button>

      <h2>Current emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>

      <input type="checkbox" value={checked}
        onChange={setChecked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
