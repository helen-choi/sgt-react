import React from 'react';

export default function Header(props) {
  return (
    <div className="header-container">
      <h1>{props.text}</h1>
      <div className="average-grade"><p>Average Grade <span>{props.average}</span> </p></div>
    </div>
  );
}
