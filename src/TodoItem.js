import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span>
        <p>{props.text}</p>
      </span>
    </li>
  );
}

export { TodoItem };
