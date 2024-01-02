import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store";
function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter is : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default App;
