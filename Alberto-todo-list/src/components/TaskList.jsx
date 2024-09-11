import React from "react";
import Checkbox from "./Activity";

const TaskList = Todo => {
  /** la entrada al TaskList es la lista y el estado de la misma */
  const { list, setList } = Todo;

 /** Cambiar a realizado el es estado de la actividad cuando se chequee*/
  const onChangeStatus = e => {
     const { name, checked } = e.target;
         const updateList = list.map(item => ({
         ...item,
          done: item.id === name ? checked : item.done
       }));
     setList(updateList);
  };

  /** remover todos los items chequeados con el filtro */
  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  /** Funcion que identifica el numero de elementos y pinta la lista*/
  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  return (
    <div className="Todo-list">
      
      {list.length ? chk : "No tasks"}
      
      {list.length ? (
        <p>
          <button className="button-delete" onClick={onClickRemoveItem}>
            Limpiar Ejecutados
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;