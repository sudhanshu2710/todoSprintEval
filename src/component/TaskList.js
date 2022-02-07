import React, { useState } from "react";

import style from "./TaskList.module.css";
export const TaskList = (props) => {
  const [editInput, setEditInput] = useState("");
  const [e, setE] = useState(true);
  const changeStatus = (e) => {
    const start = Date.now();

    props.updateStatus(props.taskId, e.currentTarget.checked, start);
  };
  const deleteTask = (e) => {
    props.removeTask(props.taskId);
  };
  const editTask = (e) => {
    setE(false);
  };
  const setNewEditedTask = (e) => {
    setEditInput(e.currentTarget.value);
  };
  const SaveTask = (e) => {
    setE(true);
    props.saveNEWtask(props.taskId, editInput);
  };

  return (
    <div className={style.container}>
      <input type="Checkbox" onChange={changeStatus} />
      {e && (
        <div className={!props.taskStatus ? style.taskNotDone : style.taskDone}>
          {props.taskName}
        </div>
      )}
      {!e && (
        <input
          type="text"
          value={editInput}
          onChange={setNewEditedTask}
          placeholder={props.taskName}
        ></input>
      )}
      <button className={style.btn} onClick={deleteTask}>
        Delete
      </button>
      {e && (
        <button className={style.btn} onClick={editTask}>
          Edit
        </button>
      )}
      {!e && (
        <button className={style.btn} onClick={SaveTask}>
          Save
        </button>
      )}
    </div>
  );
};
