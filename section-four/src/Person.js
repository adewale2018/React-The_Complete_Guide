import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>NAME: {props.name}, AGE: {props.age}, TECH: {props.tech}</p>
      <input onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default person;
