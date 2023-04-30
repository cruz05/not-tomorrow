import { useReducer } from 'react'

function reducer(state, action) {
  const { type, payload } = action

  if (type === 'CREATE_TASK') {
    return [...state, payload]
  }

  if (type === 'UPDATE_TASK') {
    const { id, updatedTask } = payload
    return state.map(task => {
      if (task.id === id) return updatedTask
      return task
    })
  }

  if (type === 'DELETE_TASK') {
    return state.map(task => {
      if (task.id !== id) task
    })
  }

  if (type === 'GET_TASK') {
    return state.find(task => task.id === payload)
  }

  return state
}

export function useStore(initialValue) {
  const [tasks, dispatch] = useReducer(reducer, initialValue)

  const createTask = payload => {
    dispatch({ type: 'CREATE_TASK', payload })
  }

  const updateTask = payload => {
    dispatch({ type: 'UPDATE_TASK', payload })
  }

  const searchTask = payload => {
    dispatch({ type: 'GET_TASK', payload })
  }

  const deleteTask = payload => {
    dispatch({ type: 'DELETE_TASK', payload })
  }

  return { tasks, createTask, updateTask, searchTask, deleteTask }
}
