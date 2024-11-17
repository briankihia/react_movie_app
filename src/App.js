import './App.css';

// every component has a built in props object
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.LastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}


const App = () => {  
  
  return (
    <div className="App">
      {/* below we are assigning a name to our first component as john */}
      <Person name={'john'} LastName={'Doe'} age={25}/>
      <Person name='victor' LastName='ketch' age={12}/>
      <Person name="brian" LastName="Kiama" age={30}/>
    </div>
  );
}

export default App;
