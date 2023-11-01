import { MyElem, MyNavBar, MyContent, country, text, value } from "./MyElem";

function App() {
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>{value}</p>
      <MyElem />
      <MyNavBar />
      <MyContent />
    </div>
  );
}

export default App;
