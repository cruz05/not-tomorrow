import { AddTask } from "../components/AddTask";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { TaskList } from "../components/TaskList";
import "../styles/AddTask.css";
import "../styles/Task.css";


function Home() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());
  const [modal, setModal] = useState(false);

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
    <div className="App">
      <Header counter={counter} />
      <main>
        <div className="date-display">
          <p className="date">{date}</p>
          <button className={`btn-create-task ${tasks.length ? '' : 'disabled'}`} onClick={() => setModal(true)}>Create task</button>
        </div>
        <section className="tasks">
          { tasks.length > 0 
          ?  <TaskList tasks={tasks} /> 
          : <button className="btn-first-task" onClick={() => {
            setModal(true)
          }}>+ Add new task</button> }
        </section>

      {modal && (
        <AddTask onAdd={addTask} closeModal={closeModal} />
        )}
      </main>
    </div>
  );
}

export default Home;
