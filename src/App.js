import React, { useState } from "react";
import Input from "./component/Input";
import { TaskList } from "./component/TaskList";
import style from "./App.module.css";
import { ShowList } from "./component/ShowList";
const DUMMY_Array = [];

function App() {
  const [todos, setTodos] = useState(DUMMY_Array);
  const [showDone, setShowDone] = useState(false);
  const [done, setDone] = useState([]);
  const setTaskList = (newTask) => {
    setTodos((prevState) => {
      return [...todos, newTask];
    });
  };
  const updateStatus = (id_, status_, start_) => {
    const index = todos.findIndex((e) => e.id === id_);
    todos[index].status = status_;
    todos[index].time = start_;
    setDone([...done, todos[index]]);
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const removeTask = (id_) => {
    const index = todos.findIndex((e) => e.id === id_);
    todos.splice(index, 1);

    setTodos([...todos]);
  };
  const removeTaskShow = (id_) => {
    const index = done.findIndex((e) => e.id === id_);
    done.splice(index, 1);

    setDone([...done]);
  };
  const show = () => {
    setShowDone(showDone ? false : true);
  };
  const saveNEWtask = (id_, newName_) => {
    console.log(newName_);
    const index = todos.findIndex((e) => e.id === id_);
    todos[index].taskName = newName_;
    setTodos([...todos]);
  };
  return (
    <div className={style.container}>
      <Input setTask={setTaskList} />
      <ul className={style.expensesList}>
        {todos.map((task) => (
          <li key={task.id}>
            <TaskList
              taskName={task.taskName}
              taskId={task.id}
              taskStatus={task.status}
              updateStatus={updateStatus}
              removeTask={removeTask}
              saveNEWtask={saveNEWtask}
            />
          </li>
        ))}
      </ul>
      <button className={style.btnShow} onClick={show}>
        Show Completed TODO'S
      </button>
      {showDone && (
        <ul className={style.expensesList}>
          {done.map((task) => (
            <li key={task.id}>
              <ShowList
                taskName={task.taskName}
                taskId={task.id}
                taskTime={task.time}
                taskStatus={task.status}
                updateStatus={updateStatus}
                removeTaskShow={removeTaskShow}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
