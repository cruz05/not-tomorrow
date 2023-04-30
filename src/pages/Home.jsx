import { useState, useEffect, useContext } from 'react'
import { Form } from '../components/Form/Form'
import { Header } from '../components/Header/Header'
import { TaskList } from '../components/Task/TaskList'
import { TasksContext } from '../context/tasks'
import { formatFullDate } from '../utils/date'
import { v4 } from 'uuid'

export default function Home() {
  const { tasks, createTask, setStoredTasks } = useContext(TasksContext)
  const [counter, setCounter] = useState(tasks.length || 0)
  const [date] = useState(formatFullDate(new Date()))
  const [modal, setModal] = useState(false)

  const addTask = task => {
    const newTask = { id: v4(), ...task }
    createTask(newTask)
    setCounter(prev => prev++)
  }

  const handleClick = () => setModal(prevValue => !prevValue)

  useEffect(() => {
    console.log(tasks)
    setStoredTasks(tasks)
  }, [tasks])

  return (
    <div className='App'>
      <Header counter={counter} />
      <main>
        <div className='date-display'>
          <p className='date'>{date}</p>
          {tasks.length > 0 && (
            <button className='btn-add' onClick={handleClick}>
              Create task
            </button>
          )}
        </div>
        <TaskList tasks={tasks} handleClick={handleClick} />

        {modal && <Form onAdd={addTask} closeModal={handleClick} />}
      </main>
    </div>
  )
}
