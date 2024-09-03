//jsx：JavaScriptをHTMLみたいに書く為の拡張構文
//<h1>Hello, World!</h1>の部分

import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

ReactDOM.render(<h1>Todo App</h1>, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
