import React, { useState } from "react";

const Item = ({ content, id, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false);

  const handleDelete = () => {
    //*Appコンポーネントのもつ、todosから、自分自身を取り除く

    //*Appコンポーネントのもつ、todosから、特定のidを持つ要素を削除する関数deleteTodo
    deleteTodo(id);
  };
  //isDone => 現在の状態の参照
  //setIsDone => 状態を更新する関数
  //todo : checboxが更新された際、isDoneの状態を変更する
  //todo : isDoneの値によって打ち消し線を描写する

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          setIsDone(!isDone);
        }}
      />
      <span style={{ textDecoration: isDone ? "Line-through" : "none" }}>
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};
export default Item;
