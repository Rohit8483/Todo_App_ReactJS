const init = {
  list: [],
};
const init1 = {
  mode: false,
};

export const TodoReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((e) => e.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export const DarkModereducer = (state = init1, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        mode: !state.mode,
      };
    default:
      return state;
  }
};
