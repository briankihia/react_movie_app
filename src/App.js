import './App.css';

// we can add a new component in here
// below is our person component

const Person = () => {
  return (
    <>
      <h1>Name: John</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
    </>
  )
}


const App = () => {  
  
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
