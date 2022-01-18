import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";

function App() {
  return (
    <main>
      <h1>Audio list</h1>
      <Nav />
    </main>
  );
}

const appRoot = document.createElement("div");
appRoot.id = "app-root";

document.body.appendChild(appRoot);

ReactDOM.render(<App />, document.getElementById("app-root"));
