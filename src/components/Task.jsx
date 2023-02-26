// import PropTypes from 'prop-types'
import { useState } from "react";
import { FaRegCircle, FaPen, FaCheckCircle } from "react-icons/fa";

const Task = ({name, date, time, notes}) => {
  const [edit, setEdit] = useState(false);
  const [complete, setComplete] = useState(false);

  const changeStatus = () => {
    setComplete(!complete);
  }
  return (
    <div className={!complete ? "task-card" : "task-card inactive-card"} onDoubleClick={changeStatus}>
      { !complete ? <FaRegCircle className="status-icon" /> : <FaCheckCircle className="status-icon"/> }
      <div className="task-data">
        <span className="task-card-time">{time}</span>
        <h3 className={!complete ? "task-card-name" : "task-card-name inactive"}>{name}</h3>
        <p className="task-card-notes">{notes}</p>
        {/* <span>{date}</span> */}
      </div>
      <FaPen className="edit-icon" onClick={() => setEdit(true)} />
      
      {/* FIX: {edit && <AddTask edit={edit} data={{name,date, time, notes}} />} */}
    </div>
  );
};

export default Task;
