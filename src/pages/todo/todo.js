/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

function Todo() {
  const [todos, setTodos] = useState([1]);

  const increment = () => {
    const val = todos.length + 1;
    let newList = [...todos];
    newList.push(val);
    console.log("newList", newList);
    setTodos(newList);
  };

  return (
    <div>
      <div class="field is-grouped is-grouped-multiline">
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <p class="control" key={index}>
              <a class="button">{todo}</a>
            </p>
          ))}
      </div>
      <button onClick={increment} class="button is-primary">
        Add Todo
      </button>
    </div>
  );
}

export default Todo;
