import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setValueToAdd, addToCount } from "./store";

function App() {
  const { count, valueToAdd } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setValueToAdd(parseInt(value)));
  };
  return (
    <div className=" p-10 flex flex-col">
      <div className="m-2">
        <h1 className="font-extrabold text-xl mb-1">Count is : {count}</h1>
        <button
          className="border cursor-pointer rounded-md p-2 bg-green-500 text-white mr-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border cursor-pointer rounded-md p-2 bg-red-500 text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          className="border p-1.5 rounded ml-2"
          type="number"
          placeholder="add to count..."
          value={valueToAdd || ""}
          onChange={handleChange}
        />
        <button
          className="border cursor-pointer rounded-md p-2 bg-blue-500 text-white ml-1"
          onClick={() => dispatch(addToCount())}
        >
          Add to Count
        </button>
      </div>
    </div>
  );
}

export default App;
