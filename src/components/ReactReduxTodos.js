import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = ({ id, name, active }) => {
  const dispatch = useDispatch();
  const setActive = () => {
    dispatch({ type: "@todos/setActive", payload: id });
  };

  const remove = () => {
    dispatch({ type: "@todos/remove", payload: id });
  };

  return (
    <li onClick={setActive} title={"id: " + id}>
      {active ? name : <del>{name}</del>}
      <button onClick={remove}>Remove</button>
    </li>
  );
};

export function ReactReduxTodos() {
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  console.log({ allTodos, filteredTodos });

  useEffect(() => {
    setFilteredTodos(allTodos);
  }, [allTodos]);

  const addTodo = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36);
    const newTodo = { id, name: todoName, active: true };
    dispatch({ type: "@todos/add", payload: newTodo });
  };

  const filterByActive = (isActive) => {
    if (isActive === undefined) {
      return setFilteredTodos(allTodos);
    }
    const newTodos = allTodos.filter((todo) => todo.active === isActive);
    setFilteredTodos(newTodos);
  };

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h3>Todos</h3>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Todo name: </label>
          <input
            type="text"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <button type="button" onClick={addTodo}>
            Add
          </button>
        </div>

        <label>Filter by </label>
        <button onClick={() => filterByActive()}>All</button>
        <button onClick={() => filterByActive(false)}>Finished</button>
        <button onClick={() => filterByActive(true)}>Active</button>
      </form>

      {filteredTodos.length > 0 ? (
        <>
          <ul>
            {filteredTodos.map((todo) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </ul>
        </>
      ) : (
        <p>No todos found</p>
      )}
    </div>
  );
}
