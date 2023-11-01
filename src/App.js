function App() {
  return (
    <div>
      <MyHeader color="white" bg="black" text="my title" />
      <MyHeader color="orange" bg="skyblue" text="new title" />
    </div>
  );
}

function MyHeader(props) {
  console.log(props.color);
  console.log(props.bg);
  return (
    <div style={{ color: props.color, backgroundColor: props.bg }}>
      <h1>{props.text}</h1>
    </div>
  );
}
export default App;
