function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gold" bg="black" text="hello react" />
      <MyComp m="30px" p="10px" color="gold" bg="black" />
      <MyComp m="30px" bg="black" text="hello react" />
      <MyComp p="10px" color="gold" text="hello react" />
    </div>
  );
}

function MyComp({
  m = "30px",
  p = "10px",
  color = "pink",
  bg = "beige",
  text = "default text",
}) {
  return (
    <>
      <p style={{ margin: m, padding: p, color: color, backgroundColor: bg }}>
        {text}
      </p>
    </>
  );
}

export default App;
