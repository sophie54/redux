import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/Actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Table
        responsive="md"
        style={{ width: "500px", border: "solid 1px black" }}
      >
        <tbody>
          <tr>
            <td style={{ width: "200px" }}>{todo.description}</td>

            <td style={{ width: "80px" }}>
              <Button
                style={{
                  border: "white",
                  backgroundColor: "white",
                  marginLeft: "80px",
                }}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={!todo.isDone ? "red" : "green"}
                  class={!todo.isDone ? "bi bi-x-lg" : "bi bi-check-lg"}
                  viewBox="0 0 16 16"
                >
                  <path
                    d={
                      !todo.isDone
                        ? "M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                        : "M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"
                    }
                  />
                </svg>
              </Button>{" "}
            </td>
            <td style={{ width: "80px" }}>
              {" "}
              <Button
                style={{
                  border: "white",
                  backgroundColor: "white",
                  marginLeft: "150px",
                }}
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  ></path>
                </svg>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Todo;
