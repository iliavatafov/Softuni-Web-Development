import { useState } from "react";

const CreateTask = ({ onCreate }) => {
  const [task, setTask] = useState("");

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => onCreate(e, task, setTask)}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Wash the dishes"
          value={task}
          onChange={onChangeHandler}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateTask;
