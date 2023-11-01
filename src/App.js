function App() {
  return (
    <div>
      <MyText
        style={{
          color: "orange",
          backgroundColor: "black",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
        value="Practice with Properties"
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;
