import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import "../styles/App.css";


function App() {
  return (
    <>
      <div className="app">
      </div>  
      
      <Routes>
        <Route 
          path="/projects/corgi/"
          element={ Login }
        />
        <Route 
          path="/projects/corgi/signup/"
          element={ Signup }
        />
      </Routes>
    </>
  );
}

export default App;