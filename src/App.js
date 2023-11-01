function App() {
  return (
    <div>
      <MyBox
        p="20px"
        m="5% 5% 10% 10%"
        color="white"
        bg="blue"
        text="Whats the Weather Today?"
      />
    </div>
  );
}

function MyBox({ p, m, color, text, bg }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;
