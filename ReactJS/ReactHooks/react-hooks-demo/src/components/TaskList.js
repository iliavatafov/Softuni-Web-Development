import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks ? (
          tasks.map((x) => <TaskItem key={x._id} title={x.title} />)
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
