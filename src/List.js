import React from "react";
import Item from "./Item";

const List = ({ todos, deletTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Item
            content={todo.content}
            key={todo.id}
            id={todo.id}
            deleteTodo={deletTodo}
          />
        );
      })}
    </ul>
  );
};

export default List;
