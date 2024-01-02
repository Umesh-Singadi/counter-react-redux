import { useSelector } from "react-redux";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <>
      <h1>Counter is : {count}</h1>
    </>
  );
}

export default App;
