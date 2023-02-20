import React from "react";
import "./TodoCounter.css";

// total y completed reciben totalTodos y completedTodos de app.js. Estamos desestructurando las propiedades pero otra forma de escribir lo mismo poria ser
/*function TodoCounter(props) {
  const {total, completed } = props;
  ...} */
function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} Todos
    </h2>
  );
}

export { TodoCounter };
