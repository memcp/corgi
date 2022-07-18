import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment } from "../redux/exampleSlice";

import "../styles/App.css";


function App() {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(increment);
  }, []);

  return (
    <div className="app">
      <h1>React App</h1>
    </div>
  );
}

export default App;