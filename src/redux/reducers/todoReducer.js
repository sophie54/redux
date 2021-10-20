import { v4 as uuidv4 } from "uuid";
import { toggleTodo } from "../actions/Actions";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/actionTypes";
const initState = [
  {
    id: uuidv4(),
    description: " learn redux",
    isDone: true,
  },
];

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [payload, ...state];
    case DELETE_TODO:
      return state.filter((elm) => elm.id != payload);
    case TOGGLE_TODO:
      return state.map((elm) =>
        elm.id === payload ? { ...elm, isDone: !elm.isDone } : elm
      );

    default:
      return state;
  }
};
export default todoReducer;
