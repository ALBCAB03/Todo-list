
import React, { Fragment } from "react";

const Checkbox = Todo => {
  
  const {
    onChange,
    data: { id, description, done }
  } = Todo;
  return (
    <Fragment>
      <label className="Todo-items">
        <input
          className="Todo-state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="Todo-desc">{description}</div>
      </label>
    </Fragment>
  );
};

export default Checkbox;