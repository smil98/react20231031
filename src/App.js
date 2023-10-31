function App() {
  //must include end tag
  //if empty content must end right at the start ex. <br />
  return (
    <div>
      <MyComponent1 />
      <MyComponent1 />
      <MyComponent1 />
    </div>
  );
}

function MyComponent1() {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{ width: "100%" }}
        src="https://i.imgur.com/SuL4x4v.jpeg"
        alt="geoungbokgung"
      />
    </div>
  );
}
export default App;
