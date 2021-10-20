import React from "react";
import Todo from "./Todo";

const Todolist = ({ todolist }) => {
  console.log(todolist);
  return (
    <div>
      {todolist.map((todo) => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
  );
};

export default Todolist;
