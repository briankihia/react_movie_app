// Event is an action that can be triggered as a result of the user action or some kind of system generated event
import {useState} from 'react';
import './App.css';



const App = () => {  
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      {/* add an onclick property to below button as part of event handling */}
      {/* in it we have a callback function */}
      {/* a callback is the one that doesn't have a name , it's just waiting for some kind of a command*/}
      {/* when we click the button we want setCounter function to be called */}
      {/* we want when - button is clicked our counter is lowered by one thus inside the setCounter we create a callback function */}
      {/* prevCount is just a good way of naming the parameter of the setCounter */}
      {/* we then call the prevCount and decrement it by 1 */}
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
      
    </div>
  );
}

export default App;
