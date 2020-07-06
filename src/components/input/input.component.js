import React from 'react';
import './../../styles/input.scss';

export default ({ resetInputValue, setInputValue, value }) => {
  const inputRef = React.createRef();

  const handleInputFocus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <textarea
        className="textarea container__textarea"
        placeholder="Enter assignment..."
        ref={inputRef}
        value={value}
        onChange={(e) => { setInputValue(e.target.value) }}>
      </textarea>
      <div className="buttons">
        <button className="btn">Add note</button>
        <button
          className="btn"
          onClick={() => {
            resetInputValue();
            handleInputFocus();
          }
          }
        >
          Reset
        </button>
      </div>
    </>
  );
};