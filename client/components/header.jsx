import React from 'react';

export default function Header(props) {
  return (
    <div className="header col-sm-12">
      <h1>{props.text}</h1>
      <div className="average"><p>Average Grade <span className="badge badge-info average-grade align-middle">{props.average}</span> </p></div>
    </div>
  );
}
