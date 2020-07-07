import React from 'react';
import { notes } from './../../store/data';
import './../../styles/notes.scss';

export default () => {
  return (
    <div className="notes-list container__notes-list">
      {notes.map((note) => {
        return (
          <div className="note" key={note.id}>
            {note.task}
            <span className="note__cross">X</span>
          </div>
        )
      })}
    </div>
  );
};