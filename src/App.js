function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  return (
    <div>
      <h1>Number 1: {num1}</h1>
      <h1>Number 2: {num2}</h1>
      <h2>{num1 == num2 ? "Congrats!" : "Re-Throw the Dice"}</h2>
    </div>
  );
}

export default App;
