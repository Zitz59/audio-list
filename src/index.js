import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <main>Audio list</main>;
}

const appRoot = document.createElement("div");
appRoot.id = "app-root";

document.body.appendChild(appRoot);

ReactDOM.render(<App />, document.getElementById("app-root"));
