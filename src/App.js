
function App() {
  return (
    <div>
        <MyComponent1 />
        <MyComponent2 />
    </div>
  );
}

function MyComponent1() {
    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    )
}
function MyComponent2() {
    return (
        <>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur dignissimos, ea eveniet
                exercitationem explicabo perferendis possimus provident quia velit! Amet aut cum eaque earum natus quis
                repellat ullam voluptatem!</p>
            <ul>
                <li>Lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
            </ul>
        </>
    )
}

export default App;
