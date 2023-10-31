function App() {
  return (
    <div>
      <h1>My First React</h1>
      <MyComp />
    </div>
  );
}

function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "0109999999";
  const age = 44;
  const randomNumber = Math.random();

  return (
    <>
      <h1>age : {age}</h1>
      <h1>address : {address}</h1>
      <h1>country : {country}</h1>
      <h1>phone number : {phone}</h1>
      <h1>Random Number : {randomNumber}</h1>
      <h1>Random Number(1~10) : {Math.ceil(randomNumber * 10)}</h1>
    </>
  );
}

export default App;
