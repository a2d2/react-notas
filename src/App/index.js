import React from "react";
import { AppUI } from "./AppUI";
// import './App.css';

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el cursso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "LALALALAA", completed: true },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    // Si no hay TODOS creados por el usuario
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  //todos es un arreglo que inicialmente mostrara defaultTodos de arriba. Estamos filtrando para ver cuales de los todos tienen la propiedad completed como true y del nuevo array guardamos la propiedad lenght para saber cuantos elementos tiene por dentro el array. Es semejante para totalTodos pero para saber el total de todos que hay.
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

  // Creamos la función en la que actualizaremos nuestro localStorage
  const saveTodos = (newTodos) => {
    // Convertimos a string nuestros TODOs
    const stringifiedTodos = JSON.stringify(newTodos);
    // Los guardamos en el localStorage
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    // Actualizamos nuestro estado.  Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    //buscamos en nuestro listado de todos el indice en el arreglo para el texto que coincida con el parametro text que recibe la funciono.
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
    //clonamos el listado de todos
    const newTodos = [...todos];
    //el todo que corresponde con el text recibido en esta funcion sera colocada su proiedad completed como true
    newTodos[todoIndex].completed = true;
    //marcamos nuestro listado de todos para poder renderizar con el procedimiento setTodos. Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  //similar a la funcion anterior pero para borrar todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    //corta solo un todo
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
