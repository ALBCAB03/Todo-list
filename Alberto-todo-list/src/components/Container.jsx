/* Declaracion de dominios*/
import React, { useState } from "react";


/*Importar los componentes que se van a utilizar en el componente actual
En este caso se utilizan los componentes principales del Check list para
organizarlos en el container principal
*/
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const TodoList = () => {

  /* Se crea una variable de estado (Hook) en donde iremos guardando todas las actividades
  que el usuario desea realizar, al utilizar estados en reac se generan dos variables
    list -> listado de actividades
    setList -> Para actializar el estado actual
  */
  const [list, setList] = useState([]);

 /* handleAddItem Funcion para actualizar los valores en la lista
    considerando las acciones que se ejecutan en FormTodo
    Los valores se le dan como estados de entrada a el TaskList
 */

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };

  return (
    <div>

      <FormTodo handleAddItem={handleAddItem} />

      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default TodoList;
