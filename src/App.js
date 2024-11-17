// Event is an action that can be triggered as a result of the user action or some kind of system generated event
import {useState, useEffect} from 'react';
import './App.css';



const App = () => {  
  const [counter, setCounter] = useState(0);

  // useEffect accepts a callback function as a parameter
// useEffect allows us to do something on some kind of event
// below code will run as soon as the page loads. Th code happens as soon as this whole component renders
  useEffect(() => {
    // alert('Reload')
    // knowing that it is run when page reloads
    // how do we use this to change the value of our counter to 100 as soon as the page reloads
    // counter=100 is wrong this breaks the below rule bringing error
    // NEVER MODIFY STATE MANUALLY
    // what we can do is call the setCounter and set it to 100
    setCounter(100);
    // the above alone will not work like we want it to since even when you try to change the counter by increasing or decreasing nothing will happen
    // thus we add the second parameter to the use effect which is called the dependency array
    // below we are leaving the dependency array empty thus the code inside useEffect will only happen in the initial load of the component
    
  }, []);
  
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
