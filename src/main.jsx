import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Component tree:
// Here, main is the root or the top level component.
// App is the child.
// When our app starts, react takes this component tree and builds a JS data structure called the 'virtual dom' where each node represents a component and its properties. When the state or the data of a component changes, react updates the corresponding node in the virtual dom to reflect the changes.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
