import React from "react";
import ReactDOM from "react-dom";
import Register from "./Register";

const App = () => {
  return (
    <div>
      <h1>Formik</h1>
      <Register />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
