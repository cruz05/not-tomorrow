import Task from './Task'
import '../styles/Task.css'

export const TaskList = ({tasks}) => {
  return (
    <section className="task-display">
      {tasks.map(({id, name, date, time, notes}) => <Task key={id} name={name} date={date} time={time} notes={notes}/>
      )}
    </section>
  )
}
