function App() {
  return (
    <>
      <h1
        className="note"
        style={{ backgroundColor: "blue", color: "white" }}
        title="title property"
      >
        Lorem.
      </h1>
      <p title="content property">Lorem ipsum dolor.</p>
      <MyComp title="my property" name="heungmin" />
    </>
  );
}

//properties returned by function delivered as factor
//ex. title ="my property" -> {title:"my property"}
//property shortened as props
function MyComp(props) {
  console.log("property that MyComp has fetched", props);
  return (
    <div>
      <h1 title={props.title}>hello {props.name}</h1>
    </div>
  );
}
export default App;
