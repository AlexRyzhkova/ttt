import "./square.css";
import React from "react";

export default function Square(props) {
  // [Zustand, function zum aktualisieren des zusatnds]
  // statt props von außen kommt es von innen

  // const [value, setValue] = React.useState(null);
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
