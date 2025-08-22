import React from "react";

export default function synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.maps(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
