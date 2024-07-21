import { useEffect } from "react";
import { decrementCount, fetchData, incrementCount } from "./actions";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { count } = useSelector((state) => state.counter);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(data);
  return (
    <>
      {count}
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(decrementCount())}>Decrement</button>
    </>
  );
}

export default App;
