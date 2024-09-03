//コンポーネント
// コンポーネントを作成する際は、以下の点に注意
// React要素を返却
// コンポーネント名は必ず大文字で始めること(UpperCamelCaseが望まし)

import React from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const todos = [
    {
      content: "課題をする",
    },
    {
      content: "選択をする",
    },
    {
      content: "電話をする",
    },
    {
      content: "夕飯を作る",
    },
  ];
  return (
    <div>
      <h1>Todo App</h1>
      <Form></Form>
      <List todos={todos}></List>
    </div>
  );
};

export default App;
