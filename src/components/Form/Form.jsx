import { useEffect, useState } from 'react'
import styles from './Form.module.css'

export const Form = ({ onAdd, closeModal, ...task }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState(new Date().toJSON().split('T')[0])
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    })
  )
  const [notes, setNotes] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    if (!name) {
      console.error('You need to put a name in order to create a task')
      return
    }

    onAdd({ name, date, time, notes })
    console.log('Submit')

    setName('')
    setNotes('')
    closeModal()
  }

  useEffect(() => {
    if (task) {
    }
  }, [])

  return (
    <div className={styles.container}>
      <form className={styles.form} id='create-task' onSubmit={onSubmit}>
        <input
          placeholder='Task Name'
          type='text'
          className={styles.taskName}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='date'
          className={styles.taskDate}
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          type='time'
          className={styles.taskTime}
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <textarea
          className={styles.taskNotes}
          placeholder='Notes'
          value={notes}
          onChange={e => setNotes(e.target.value)}></textarea>
        <div className={styles.btnOptions}>
          <button className={styles.btnClose} onClick={closeModal}>
            Cancel
          </button>
          <button type='submit' className={styles.btnSubmit} form='create-task'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
