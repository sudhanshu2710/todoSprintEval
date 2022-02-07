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
  function convert(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + " min " + (seconds < 10 ? "0" : "") + seconds + " sec";
  }

  return (
    <div className={style.container}>
      <input type="Checkbox" onChange={changeStatus} checked />
      <div className={!props.taskStatus ? style.taskNotDone : style.taskDone}>
        {props.taskName}
      </div>
      <div className={style.time}>
        {convert(Date.now() - props.taskTime)} ago
      </div>
      <button className={style.btn} onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
};
