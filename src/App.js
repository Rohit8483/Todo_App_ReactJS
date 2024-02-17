import "./App.css";
import {Todo} from "./components/Todo";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";


function App() {
  const toggeledvalueOfMode=useSelector(state=>state.DarkModereducer.mode)
  console.log(toggeledvalueOfMode,"toggeledvalueOfMode")
  return (
    <div className={toggeledvalueOfMode ===false ? "body lightMode" : "body darkMode"}>
      <Navbar />
      <Todo />
    </div>
  );
}

export default App;
