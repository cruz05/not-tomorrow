import Task from './Task'
import styles from './Task.module.css'

export const TaskList = ({ tasks, handleClick }) => {
  return (
    <section className={styles.tasks}>
      {tasks.length > 0 ? (
        tasks.map(({ id, name, date, time, notes }) => (
          <Task key={id} name={name} date={date} time={time} notes={notes} />
        ))
      ) : (
        <button className={styles.btnFirstTask} onClick={handleClick}>
          + Add new task
        </button>
      )}
    </section>
  )
}
