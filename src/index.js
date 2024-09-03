//jsx：JavaScriptをHTMLみたいに書く為の拡張構文
//<h1>Hello, World!</h1>の部分

import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
