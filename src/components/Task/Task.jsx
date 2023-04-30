import { useState } from 'react'
import { FaRegCircle, FaPen, FaCheckCircle } from 'react-icons/fa'
import styles from './Task.module.css'

const Task = ({ name, date, time, notes }) => {
  const [edit, setEdit] = useState(false)
  const [complete, setComplete] = useState(false)

  const changeStatus = () => {
    setComplete(!complete)
  }

  const handleClick = e => {
    e.stopPropagation()
    setEdit(true)
    console.log('editing')
  }

  return (
    <div
      className={
        !complete ? styles.card : `${styles.card} ${styles.cardInactive}`
      }
      onClick={changeStatus}>
      {!complete ? (
        <FaRegCircle className={styles.statusIcon} />
      ) : (
        <FaCheckCircle className={styles.statusIcon} />
      )}
      <div className={styles.cardContent}>
        <span>{time}</span>
        <h3 className={complete ? styles.inactive : undefined}>{name}</h3>
        <p>{notes}</p>
        {/* <span>{date}</span> */}
      </div>
      <FaPen className={styles.editIcon} onClick={handleClick} />

      {/* {edit && (
        <Form
          edit={edit}
          closeModal={() => console.log('Close MODAL')}
          data={{ name, date, time, notes }}
        />
      )} */}
    </div>
  )
}

export default Task
