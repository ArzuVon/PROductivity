import React from "react";
import { Link } from "react-router-dom";

function ToDo(props) {
  return (
    <>
      <Link to={`/Daily/${props.id}`}>
        <h2>{props.title}</h2>
      </Link>
    </>
  );
}

export default ToDo;
