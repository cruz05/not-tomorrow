import { useState } from "react";
import { FaRegCircle, FaPen, FaCheckCircle } from "react-icons/fa";
// import PropTypes from 'prop-types'
// import EditTask from "./EditTask";

const Task = ({ name, date, time, notes = "Notes" }) => {
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!status);
  }

  return (
    <div className="task-card" onDoubleClick={changeStatus}>
      { !status ? <FaRegCircle className="status-icon" /> : <FaCheckCircle className="status-icon"/> }
      <div className="task-data">
        <span className="task-card-time">{time}</span>
        <h3 className={!status ? "task-card-name" : "task-card-name inactive"}>{name}</h3>
        <p className="task-card-notes">{notes}</p>
        {/* <span>{date}</span> */}
      </div>
      <FaPen className="edit-icon" onClick={() => setEdit(true)} />
      {/* {edit && <EditTask id={id} name={name} notes={notes} />} */}
    </div>
  );
};

export default Task;

/* Task.propTypes = {
     name: PropTypes.string.isRequired,
 }*/
