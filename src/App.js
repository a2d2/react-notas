import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  //todos es un arreglo que inicialmente mostrara defaultTodos de arriba. Estamos filtrando para veer cuales de los todos tienen la propiedad completed como true y del nuevo array guardamos la propiedad lenght para saber cuantos elementos tiene por dentro el array. Es semejante para totalTodos pero para saber el total de todos que hay.
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  //searchedTodos es el array que permite ir filtrando cada que se escribe una letra en el buscador los todos que tienen esa secuencia de letras escritas ahi.
  let searchedTodos = [];
  //searcvalue.legnth lleva el registro de cuantas letras han escrito en el buscador
  if (searchValue.length < 1) {
    //si no se ha escrito ninguna letra entra aqui
    searchedTodos = todos;
  } else {
    //Si es mayor a 1 entonces vamos a filtrar la cantidad de todos
    searchedTodos = todos.filter((todo) => {
      // primero transformamos toda la lista de todos a minusculas
      const todoText = todo.text.toLowerCase();
      // segundo transformamos lo que sea que escriban los usuarion en el searchbox a minusculas tambien
      const searchText = searchValue.toLowerCase();
      //el input del searchbox tien la propiedad includes que nos obtiene solo lo que el texto escrito aparezca en los diferentes textos de los todos en pantalla.
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      {/* Cada cambio de las variables totalTodos y completedTodos se envia a nuestro componente TodoCounter */}
      <TodoCounter total={totalTodos} completed={completedTodos} />
      {/*searchValue es el valor y setSearchvalue es la funcion para actualizar ese valor**/}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {/* se filtran solo los todos buscados en el searchbox que es lo que el arreglo searchedTodo hizo lineas arriba. Cuando los usuarios no escriban nada vamos a mostrar todos los todos pero si escriben algo solo mostramos los searchedTodos */}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
