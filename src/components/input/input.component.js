import React from 'react';
import './../../styles/input.scss';

export default () => {
  return (
    <>
      <textarea className="textarea container__textarea" placeholder="Enter assignment..."></textarea>
      <div className="buttons">
        <button className="btn">Add note</button>
        <button className="btn">Reset</button>
      </div>
    </>
  );
};