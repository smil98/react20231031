function App() {
  const myStyle = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <div style={myStyle}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "heungMin";
  return <h1>{name}</h1>;
}

export default App;
