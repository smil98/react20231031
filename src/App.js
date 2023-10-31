function App() {
  return (
    // since jsx is converted to js, cannot use jsx keywords
    <>
      <div className="header">Cannot write div class=""</div>
      <div className="error">Use className instead</div>
      <div>
        <label htmlFor="nameInput">Name</label>
        {/*for property is used as htmlFor*/}
        <input type="text" id="nameInput" />
      </div>
      <div>
        <label htmlFor="nameInput">Age</label>
        <input type="text" id="ageInput" />
      </div>
    </>
  );
}

export default App;
