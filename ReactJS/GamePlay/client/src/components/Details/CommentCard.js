export const CommentCard = ({ comment }) => {
  console.log(comment);
  return (
    <li className="comment">
      <p>Content: {comment}</p>
    </li>
  );
};
