// before we use state we need to import it
import {useState} from 'react';
import './App.css';



const App = () => {  
  // use const and use the concept of array destructuring that is how state works
  // whenever you call something as a function and it starts with use, in react we cal that a hook
  // in the square brackets we will have the name of the state
  // the second part is going to be the setter function 
  // a good rule of thumb is that you call the second variable the same as the first one but add the set infront because it is a setter function for the first variable
  // inside of the usestate you provide the initial value
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="App">
      {/* to really show the purpose of state let's use a counter */}
      <button>-</button>
      <h1>{counter}</h1>
      <button>+</button>
      
    </div>
  );
}

export default App;
