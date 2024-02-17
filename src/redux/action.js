import {
  ADD_TODO,
  DELETE_TODO,
  REMOVE_TODO,
  TOGGLE_DARK_MODE,
} from "./actionTypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};
export const removeTodo = () => {
  return {
    type: REMOVE_TODO,
  };
};
export const toggledarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};
