function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  let message = "Retry...";
  let messageClassName = "lose";

  if (num1 == num2) {
    messageClassName = "win";
    message = "Congrats!";
  }
  return (
    <>
      <h1>First Dice: {num1}</h1>
      <h1>Second Dice: {num2}</h1>
      <h2 className={messageClassName}>{message}</h2>
    </>
  );
}

export default App;
