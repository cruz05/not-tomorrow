import { AddTask } from "../components/AddTask";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { TaskList } from "../components/TaskList";
import "../styles/AddTask.css";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());
  const [modal, setModal] = useState(false);

  // TODO: FIX display of tasks
  const addTask = (task) => {
    const id = counter;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(tasks)
  }, [tasks]);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <main className="App">
      <Header counter={counter} />
      <div className="date-display">
        <p className="date">{date}</p>
      </div>
      <button className="btn-create-task" onClick={() => setModal(true)}>
        Create task
      </button>

      {modal && (
        <AddTask onAdd={addTask} closeModal={closeModal} />
      )}

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        console.log("There are no tasks.")
      )}
    </main>
  );
}

export default Home;
