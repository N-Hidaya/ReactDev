import './App.css'
import {useState} from 'react';

//building custom hook UseInput
function useInput(initialValue) {
    const [value, setValue] =
        useState(initialValue);
    
    return [
        {
            value,
            onChange: (e) => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ];
  }

function Custom() {
    //another method using new function created UseInput
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit2 = (e) => {
        e.preventDefault();
        alert(`${titleProps.value}, ${colorProps.value}`)
        //reset inputs
        resetTitle("");
        resetColor("#000000");
  };

  return (
    <div className='App'>
    <form onSubmit={submit2}>
          <input {...titleProps} type="text" placeholder="color title..." />
          <input {...colorProps} type="color" />
          <button>ADD another style</button>
    </form>
    </div>
    
  );
}

export default Custom;