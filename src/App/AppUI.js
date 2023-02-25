import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      {/* Cada cambio de las variables totalTodos y completedTodos se envia a nuestro componente TodoCounter */}
      <TodoCounter total={totalTodos} completed={completedTodos} />
      {/*searchValue es el valor y setSearchvalue es la funcion para actualizar ese valor**/}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {/* se filtran solo los todos buscados en el searchbox que es lo que el arreglo searchedTodo hizo lineas arriba. Cuando los usuarios no escriban nada vamos a mostrar todos los todos pero si escriben algo solo mostramos los searchedTodos */}
        {/* se envia el texto del todo a la funcion completeTodos  en la funcion onComplete a continuacion*/}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
