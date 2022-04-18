import React from "react";
import "./style.css";
import Head from "./Heads.js"
import Heads from "./Component/Heads";
import Data from "./Component/Data"
import Education from "./Component/Education"
import Refer from "./Component/Refer"
import "./Refer.css"

export default function App() {
  return (
    <div >
      <Heads />
      <Data />
      <Education />
      <hr />
      <Refer />
      <div className="heady">
      

      </div>

    </div>
  );
}
