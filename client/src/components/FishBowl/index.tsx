import React from 'react';
import './module.css';
export default function FishBowl(props) {
  return (
    <div id="fishbowl">
      <div className="content">{props.children}</div>
    </div>
  );
}
