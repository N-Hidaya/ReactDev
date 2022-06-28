import './App.css';
//hooks useState, useEffect
import { useState, useEffect, useReducer, useRef } from 'react';
//to create navigation links
import {Link, Outlet} from "react-router-dom";

const [first, second, third] = ["Tokyo", "China", "Korea"];

console.log(first);
console.log(second);

function Home() {
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
 
   //for color picker function
   const txtTitle = useRef();
   const hexColor = useRef();
 
   console.log(txtTitle);
   const submit = (e) => {
     e.preventDefault(); //prevent the page from refreshing
     const title = txtTitle.current.value;
     const color = hexColor.current.value;
     alert(`${title}, ${color}`);
     //reset and clear the inputs
     txtTitle.current.value = "";
     hexColor.current.value = "";
   }
 
   
 
   return (
     <div className="App">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
       <h1>Hello from </h1>
       <h2>Current emotion is {emotion}</h2>
       <button onClick={() => setEmotion("sad")}>SAD</button>
       <button onClick={() => setEmotion("Excited")}>EXCITED</button>
       <button onClick={() => setEmotion("ANGRY")}>ANGRY</button>
 
       <h2>Current emotion is {secondary}</h2>
       <button onClick={() => setSecondary("grateful")}>Grateful</button>
 
       <input type="checkbox" value={checked}
         onChange={setChecked} />
       <label>{checked ? "checked" : "not checked"}</label>
 
       <form onSubmit={submit}>
         <input ref={txtTitle} type="text" placeholder="color title..." />
         <input ref={hexColor} type="color" />
         <button>ADD</button>
       </form>
 
       
     </div>
 
     
   );
}

export function About() {
  return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
          <h1>About Us</h1>
          <Outlet />
      </div>
  );
}

export function Contact() {
  return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
          <h1>Contact Us</h1>
      </div>
  );
}

export function History() {

}


//library from index.js
export function App() {
  return <Home />;
}

