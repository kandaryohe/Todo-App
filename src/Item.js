import { useState } from "react";

const Item = ({ content, id, deleteTodo }) => {
  const [isDone, setIsDOne] = useState(false);
  const hendleDelete = () => {
    deleteTodo(id);
  };
  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => {
          setIsDOne(!isDone);
        }}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={hendleDelete}>削除</button>
    </li>
  );
};

export default Item;
