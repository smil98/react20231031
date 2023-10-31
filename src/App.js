function App() {
  const number = Math.ceil(Math.random() * 100);
  const isLarge = number > 50;
  const isSmall = number <= 50;

  return (
    <>
      <h1>Random Number : {number}</h1>
      <h1>{number > 50 ? "Big" : "Small"} Number</h1>
      <div style={{ color: "red" }}>
        {number > 50 ? <BigImg /> : <SmallImg />}
      </div>
      <div>{isLarge && <h2>Its a Big Number</h2>}</div>
      <div>{isLarge || <h2>Its a Small Number</h2>}</div>
    </>
  );
}

function BigImg() {
  return <h1>Big Image</h1>;
}

function SmallImg() {
  return <h1>Small Image</h1>;
}

export default App;
