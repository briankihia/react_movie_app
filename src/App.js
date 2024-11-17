// Event is an action that can be triggered as a result of the user action or some kind of system generated event
import {useState, useEffect} from 'react';
import './App.css';



const App = () => {  
  const [counter, setCounter] = useState(0);

  // useEffect accepts a callback function as a parameter
// useEffect allows us to do something on some kind of event
// below code will run as soon as the page loads. Th code happens as soon as this whole component renders
  useEffect(() => {
    // we want whenever counter is changed we want to get an alert
    alert("You've changed counter to" + counter);

  }, [counter]);
  
  return (
    <div className="App">
     
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      
    </div>
  );
}

export default App;
