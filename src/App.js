function App() {
  //must include end tag
  //if empty content must end right at the start ex. <br />
  return (
    <div>
      <h1>My First React</h1>
      <MyComp />
    </div>
  );
}

//syntax: components should always start with Uppercase
//must have return statement, mostly jsx code
function MyComp() {
  //always should have one root tag
  return (
    <>
      <h2>Component Example</h2>
      <h3>Must have one root tag</h3>
      {/*this is how th add comments*/}
    </>
  );
}

export default App;
