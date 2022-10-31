import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks &&
          tasks?.map((x) => (
            <TaskItem key={x._id} title={x.title} id={x._id} />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
