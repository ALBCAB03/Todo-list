import Checkbox from "./Activity";

const TaskList = (props) => {
  /** la entrada al TaskList es la lista y las funciones para que el padre pueda actualizar la lista */
  const { list, onChangeItem, onCleanUpCompletedTasks } = props;

  /** Funcion que identifica el numero de elementos y pinta la lista*/
  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={() => onChangeItem(item)} />
  ));

  return (
    <div className="Todo-list">
      {list.length ? chk : "No tasks"}

      {list.length ? (
        <p>
          <button className="button-delete" onClick={onCleanUpCompletedTasks}>
            Limpiar Ejecutados
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
