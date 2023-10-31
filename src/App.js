function App() {
  //must include end tag
  //if empty content must end right at the start ex. <br />
  return (
    <div>
      <h1>My First React</h1>
      <MyComp />
      <MyComp2 />
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

function MyComp2() {
  let name = "son";
  let number = 33;

  return (
    <>
      <h1>hello react</h1>
      <h1>hello {name}</h1>
      <h2>age {number}</h2>
      <h3>{number * 2} double years</h3>
      <h3>{name + " heungmin"}</h3>
      {/* comments formed like this */}
    </>
  );
}

export default App;
