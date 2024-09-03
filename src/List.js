import React from "react";
import Item from "./item";

const List = ({ todos }) => {
  //todo:データの数(todosの個数)の分だけItemコンポーネントを呼び出す
  return (
    <ul>
      {/* <Item content={todos[0].content}></Item>
      <Item content={todos[1].content}></Item>
      <Item content={todos[2].content}></Item>
      <Item content={todos[3].content}></Item> */}
      {todos.map((todo) => {
        return <Item content={todo.content}></Item>;
      })}
    </ul>
  );
};

export default List;
