import { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducer.list);
  const toggeledvalueOfMode=useSelector(state=>state.DarkModereducer.mode)

  const handleClickToAdd = () => {
    if (inputData.trim() !== "") {
      dispatch(addTodo(inputData));
      setInputData("");
    } else {
      alert("Input feild should not be empty");
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleClickToAdd();
      console.log("clicke");
    }
  };

  const handleClickToDeleteAllTodo = () => {
    dispatch(removeTodo());
  };

  return (
    <div className="appContainer">
      <h1>Todo App</h1>
      <div className="addItems">
        <input
          placeholder="Add your todo..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyPress={handleEnterKey}
        ></input>
        <button onClick={handleClickToAdd}>Add</button>
        {list.length >= 2 && (
          <button onClick={handleClickToDeleteAllTodo}>Clear List</button>
        )}
      </div>

      <div className="show">
        {list.map((e) => {
          return (
            <div className="eachItem" key={e.id}>
              <table className={toggeledvalueOfMode ===false ? "tableLightMode" : "tableDarkMode"}>
                <tbody>
                  <tr>
                    <td className="tdWithCheckbox">
                      <input type="checkbox" />
                      <p>{e.data}</p>
                    </td>
                    <td className="butt">
                      <button
                        onClick={() => {
                          dispatch(deleteTodo(e.id));
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
