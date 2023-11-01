function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Soccer Players</h1>
      <MyElem name="heungMin" age={44} team="totnum" />
      <MyElem name="kangin" age={33} team="paris" />
    </div>
  );
}

function MyElem({ name, age, team }) {
  return (
    <div>
      <ul>
        <h1>{name}</h1>
        <li>age: {age}</li>
        <li>team : {team}</li>
      </ul>
    </div>
  );
}

export default App;
