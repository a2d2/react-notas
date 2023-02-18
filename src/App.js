//import "./App.css";
import React from "react";

const todos = [
  { text: "tarea 1", completed: "false" },
  { text: "tarea 2", completed: "false" },
  { text: "tarea 3", completed: "false" },
];
function App() {
  //props que viene de index.js es usado en linea 19
  return (
    <React.Fragment>
      {/*<TodoCounter />*/}
      <h2> Has complentado 2 de 3 ToDos</h2>
      {/*<TodoSearch />*/}
      <input placeholder="Cebolla" />
      {/*<TodoList>
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList>*/}
      {/*<CreateTodoButton />*/}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
