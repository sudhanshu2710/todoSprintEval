import React, { useState } from "react";

function Input(props) {
  const [input_, setInput_] = useState("");
  const setInputTask = (e) => {
    setInput_(e.currentTarget.value);
  };
  const sendTask = () => {
    const newTask = {
      taskName: input_,
      status: false,
      id: Math.random().toString(),
    };
    props.setTask(newTask);
    setInput_("");
  };
  return (
    <React.Fragment>
      <h3>Task TODO</h3>
      <input type="text" value={input_} onChange={setInputTask}></input>
      <button type="submit" onClick={sendTask}>
        Add Task
      </button>
    </React.Fragment>
  );
}

export default Input;
