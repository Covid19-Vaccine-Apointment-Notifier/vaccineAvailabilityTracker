import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import './index.css';

import Store from "./globalState/Store";



const Index = () => {
  return (
      <Store>
        <App />
      </Store>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));

export default Index;
