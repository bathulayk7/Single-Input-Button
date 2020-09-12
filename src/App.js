import React from "react";
import SimpleForm from "./components/SimpleForm/simpleForm.component.js";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-4">
          <h1>Simple Form</h1>
          <hr/>
          <SimpleForm />
        </div>
      </div>
    </div>
  );
}

export default App;
