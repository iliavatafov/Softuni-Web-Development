import { useState } from "react";

const CreateTask = ({ createTaskHandler }) => {
  const [task, setTask] = useState("");

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form onSubmit={createTaskHandler}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Wash the dishes"
          value={task}
          onChange={onChangeHandler}
        />
      </form>
      <button>Add</button>
    </div>
  );
};

export default CreateTask;
