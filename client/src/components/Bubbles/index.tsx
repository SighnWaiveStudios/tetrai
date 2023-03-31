import React from 'react';
import './module.css';
export default function Bubbles(props) {
  return (
    <div className="Bubbles ocean">
      <div className="bubble bubble--1"></div>
      <div className="bubble bubble--2"></div>
      <div className="bubble bubble--3"></div>
      <div className="bubble bubble--4"></div>
      <div className="bubble bubble--5"></div>
      <div className="bubble bubble--6"></div>
      <div className="bubble bubble--7"></div>
      <div className="bubble bubble--8"></div>
      <div className="bubble bubble--9"></div>
      <div className="bubble bubble--10"></div>
      <div className="bubble bubble--11"></div>
      <div className="bubble bubble--12"></div>
      {props.children}
    </div>  
  );
}
