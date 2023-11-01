import MyBox, { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "./component/MyElem";

function App() {
  return (
    <>
      <h1>{address}</h1>
      {/*if both imports have same name, if you don't clarify which one it is will result error
      thus give alias by "as aliasName" when importing */}
      <h1>{myAddress}</h1>
      <MyElem />
      <MyBox />
    </>
  );
}

export default App;
