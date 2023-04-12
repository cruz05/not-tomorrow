import { useState, useEffect } from "react";
import { Form } from "../components/Form";
import Header from "../components/Header";
import { TaskList } from "../components/TaskList";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 } from 'uuid'
import "../styles/AddTask.css";
import "../styles/Task.css";

export default function Home() {
  const [storedTasks, setStoredTasks] = useLocalStorage({key: 'tasks', initialValue: []})
  const [tasks, setTasks] = useState(storedTasks || []);
  const [counter, setCounter] = useState(tasks.length);
  const [date, setDate] = useState(new Date().toDateString());
  const [modal, setModal] = useState(false);

  const addTask = (task) => {
    const newTask = { id: v4(), ...task };
    setTasks([...tasks, newTask]);
    setCounter((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log(tasks)
    setStoredTasks(tasks)
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
          {tasks.length > 0 && <button className={`btn-create-task`} onClick={() => setModal(true)}>Create task</button>}
        </div>
        <section className="tasks">
          { tasks.length > 0 
          ?  <TaskList tasks={tasks} /> 
          : <button className="btn-first-task" onClick={() => {
            setModal(true)
          }}>+ Add new task</button> }
        </section>
        {modal && (
          <Form onAdd={addTask} closeModal={closeModal} />
          )}
      </main>
    </div>
  );
}