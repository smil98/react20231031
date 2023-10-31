function App() {
  const myStyle = {
    color: "red",
    backgroundColor: "black",
    fontSize: "5rem",
    textAlign: "center",
    //since - is a subtract sign in js, use lowerCamelCase for properties
  }; //js Object

  return (
    <>
      <h1 style={myStyle}>Lorem ipsum dolor.</h1>
      <h1 style={{ color: "red", backgroundColor: "yellow", fontSize: "30px" }}>
        Lorem ipsum dolor.
      </h1>
    </>
  );
}

export default App;
