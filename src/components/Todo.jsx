import { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

import "./Todo.css";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducer.list);
  return (
    <div className="TodoApp">
      <h1>Todo App</h1>
      <div className="addItems">
        <input
          placeholder="add your todo"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <button
          onClick={() => {
            dispatch(addTodo(inputData), setInputData(""));
          }}
        >
          Add
        </button>
      </div>
      <div className="show">
        {list.map((e) => {
          return (
            <div className="eachItem" key={e.id}>
              <table>
                <tr>
                  <td>
                   
                    <p> {e.data}</p>
                  </td>
                  <td className="butt">
                    <button
                      onClick={() => {
                        dispatch(deleteTodo(e.id));
                      }}
                    >
                      del
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          dispatch(removeTodo());
        }}
      >
        Remove All Todos
      </button>
    </div>
  );
};
