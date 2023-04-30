import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { TasksContextProvider } from './context/tasks'

export const App = () => {
  return (
    <TasksContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TasksContextProvider>
  )
}
