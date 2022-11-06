import { useState } from "react";

export const AddComment = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form onSubmit={(e) => onSubmit(e, comment)} className="form">
        <textarea
          name="comment"
          placeholder="Comment......"
          value={comment}
          onChange={onChange}
        />
        <input
          className="btn submit"
          type="submit"
          defaultValue="Add Comment"
        />
      </form>
    </article>
  );
};
