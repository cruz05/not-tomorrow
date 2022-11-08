import { useState } from "react";
import { FaRegCircle, FaPen } from "react-icons/fa";
// import PropTypes from 'prop-types'
// import EditTask from "./EditTask";

const Task = ({ name, date, time, notes = "Notes" }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="Task">
      <FaRegCircle className="status-icon" onClick={changeStatus} />
      <div className="data">
        <h3>{name}</h3>
        <p>{notes}</p>
        <span>{time}</span>
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
