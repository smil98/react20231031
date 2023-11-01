function App() {
  return (
    <>
      <MyComp name="heungmin" address="sincheon" city="seoul" age={33} />
      <MyComp address="gangnam" city="busan" age={22} />
      <MyComp address="london" city="london" />
      <MyComp name="heechan" address="gangnam" city="paris" age={66} />
    </>
  );
}

function MyComp({ name = "Anon", address, city, age = 100 }) {
  // let {value, address} = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        lives in {address}, currently working in {city} and is currently{" "}
        {age + " "} years old.
      </p>
    </div>
  );
}
export default App;
