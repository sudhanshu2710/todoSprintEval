import React from "react";

import style from "./ShowList.module.css";
export const ShowList = (props) => {
  const changeStatus = (e) => {
    // props.updateStatusShow(props.taskId, e.currentTarget.checked);
  };
  const deleteTask = (e) => {
    props.removeTaskShow(props.taskId);
  };
  const editTask = (e) => {
    console.log(e);
  };

  return (
    <div className={style.container}>
      <input type="Checkbox" onChange={changeStatus} checked />
      <div className={!props.taskStatus ? style.taskNotDone : style.taskDone}>
        {props.taskName}
      </div>
      <button className={style.btn} onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
};
