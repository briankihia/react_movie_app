import './App.css';

const App = () => {
  // we explore dynamic nature of react
  // we can call different variables here
  
  const name = null;
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      {/* we open up curly braces and check if name exists. In that case we want to render this react fragment inside of this parenthesis*/}
      {/* below is an if condition thus has 2 parts */}
      {/* NB- if you want to render 2 different elements one next to another, you need to wrap them in a so called react fragments */}
      {name ? (
        <>tests</>
      ): (
        <>
          <h1>test</h1>
          <h2>no name available</h2>
        </>
        
      )}
    </div>
  );
}

export default App;
