import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskItem = ({ title, id }) => {
  const { onDeleteHandler } = useContext(TaskContext);
  return (
    <li>
      {title}
      <button onClick={() => onDeleteHandler(id)}>x</button>
    </li>
  );
};

export default TaskItem;
