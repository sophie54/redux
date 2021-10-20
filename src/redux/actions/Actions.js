import { v4 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_FILTER,
  TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (description) => {
  return {
    type: ADD_TODO,
    payload: { id: v4(), description, isDone: false },
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
export const toggleFilter = (filter) => {
  return {
    type: TOGGLE_FILTER,
    payload: filter,
  };
};
