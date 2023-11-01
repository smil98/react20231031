function App() {
  return (
    <>
      <MyComp value="heungmin" address="sincheon" />
      <MyComp value="kangin" address="hongdae" />
    </>
  );
}

function MyComp({ value, address }) {
  // let {value, address} = props;
  return (
    <div>
      <h1>
        {value} lives in {address}
      </h1>
    </div>
  );
}
export default App;
