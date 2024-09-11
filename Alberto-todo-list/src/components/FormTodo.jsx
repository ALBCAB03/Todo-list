import React, { useState } from "react";

const FormTodo = Ftodo => {
  /*Se crean estados asociados a
  - handleAddItem : variable con la funcion que actualiza nuestra lista
  - description : estado para el manejo de la descripcion actual, permite resetear variable
  */
  const { handleAddItem } = Ftodo;
  const [description, setDescription] = useState("");

  /** Funcion permite resetear el formulario*/
  const handleSubmit = e => {
      /** Evita que se actualice toda la pagina sino unicamente los espacios necesarios.
       * de no incluirla la Todo list se reseteara cada vez que agreguemos un elemento*/ 
      e.preventDefault();

      /** se le dise a la funcion handleAddItem que agregue a la listo lo que el usuario escribio */
     handleAddItem({
           done: false,
           id: (+new Date()).toString(),
          description
        });
        
        /** Se borra lo que tenemos en el input */
     setDescription(""); 
   };

  return (
    <form onSubmit={handleSubmit}>
      
        <div className="Todo-form">
         
          <input
            type="text"
            className="Input-form"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Siguiente Tarea"
          />
          
          <button
            className="button-form"
            disabled={description ? "" : "disabled"}
          >
            ADD
          </button>
        </div>
    </form>
  );
};

export default FormTodo;