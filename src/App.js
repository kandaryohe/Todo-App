//コンポーネント
// コンポーネントを作成する際は、以下の点に注意
// React要素を返却
// コンポーネント名は必ず大文字で始めること(UpperCamelCaseが望まし)

import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   content: "課題をする",
    //   id: nanoid(),
    // },
    // {
    //   content: "選択をする",
    //   id: nanoid(),
    // },
    // {
    //   content: "電話をする",
    //   id: nanoid(),
    // },
  ]);

  //追加機能
  const addTodo = (value) => {
    setTodos([
      ...todos,
      {
        content: value,
        id: nanoid(),
      },
    ]);
  };

  //削除機能
  const deleteTodo = (id) => {
    //todo: 渡されたidを元に、そのidのついたtodoを削除する
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Form addTodo={addTodo}></Form>
      <List todos={todos} deleteTodo={deleteTodo}></List>
    </div>
  );
};

export default App;
