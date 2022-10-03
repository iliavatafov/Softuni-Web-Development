export const TodoCard = (props) => {
  let className = "todo";

  if (props.isCompleted) {
    className += " is-completed";
  }

  console.log(props);

  return (
    <tr className={className}>
      <td>{props.text}</td>
      <td>{props.isCompleted ? "Complete" : "Incompleted"}</td>
      <td className="todo-action">
        <button className="btn todo-btn" onClick={() => props.onClick(props)}>
          Change status
        </button>
      </td>
    </tr>
  );
};
