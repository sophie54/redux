import { useSelector, useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import { Button, InputGroup, FormControl, ButtonGroup } from "react-bootstrap";
import { addTodo, toggleFilter } from "./redux/actions/Actions";
import { useRef } from "react";

const App = () => {
  const todolist = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const description = useRef();

  const handleAdd = () => {
    dispatch(addTodo(description.current.value));
    description.current.value = "";
  };
  const FiltredList = () => {
    switch (filter) {
      case "done":
        return todolist.filter((elm) => elm.isDone === true);
      case "undone":
        return todolist.filter((elm) => elm.isDone === false);

      default:
        return todolist;
    }
  };

  return (
    <div style={{ margin: "15px 100px 5px 50px" }}>
      <InputGroup
        className="mb-3"
        style={{ margin: "5px 5px 5px 5px", display: "flex" }}
      >
        <FormControl
          ref={description}
          placeholder="New Todo"
          aria-describedby="basic-addon2"
          style={{ width: "300px", height: "30px" }}
        />
        <Button
          variant="outline-secondary"
          style={{ width: "50px", height: "35px" }}
          onClick={() => handleAdd()}
        >
          ADD
        </Button>
      </InputGroup>
      <ButtonGroup
        size="lg"
        className="mb-2"
        style={{ margin: "10px 5px 5px 5px", width: 350, height: 35 }}
      >
        <Button
          style={{ width: 110, height: 35 }}
          onClick={() => dispatch(toggleFilter("all"))}
        >
          All
        </Button>
        <Button
          style={{ width: 110, height: 35 }}
          onClick={() => dispatch(toggleFilter("done"))}
        >
          Done
        </Button>
        <Button
          style={{ width: 110, height: 35 }}
          onClick={() => dispatch(toggleFilter("undone"))}
        >
          UnDone
        </Button>
      </ButtonGroup>
      <div style={{ margin: "10px 5px 5px 5px" }}>
        <TodoList todolist={FiltredList()}></TodoList>{" "}
      </div>
    </div>
  );
};

export default App;
