import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useStore } from '../hooks/useStore'

export const TasksContext = createContext([])

export function TasksContextProvider({ children }) {
  const [storedTasks, setStoredTasks] = useLocalStorage({
    key: 'tasks',
    initialValue: []
  })

  const { tasks, createTask, updateTask, deleteTask, searchTask } = useStore(
    storedTasks || []
  )

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
        searchTask,
        setStoredTasks
      }}>
      {children}
    </TasksContext.Provider>
  )
}
