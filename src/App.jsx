import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setValueToAdd } from "./store";

function App() {
  const { count, valueToAdd } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setValueToAdd(parseInt(value)));
  };
  return (
    <>
      <h1>Counter is : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input
          type="number"
          placeholder="add to count..."
          value={valueToAdd || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
