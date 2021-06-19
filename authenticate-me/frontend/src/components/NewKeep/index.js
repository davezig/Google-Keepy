import { useState } from 'react';
import './NewKeep.css';

function NewKeep() {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [hasFocus, setHasFocus] = useState(false);

  function getFocus(event) {
    setHasFocus(true);
  }

  function loseFocus(event) {
    event.stopPropagation();
    setHasFocus(false);
  }

  return (
    <div className="newKeep" onClick={getFocus}>
      {hasFocus && (
        <input
          type="text"
          value={title}
          placeholder="Title"
          onInput={(event) => setTitle(event.target.value)}
        ></input>
      )}

      <input
        type="text"
        value={body}
        placeholder="Take a note..."
        onInput={(event) => setBody(event.target.value)}
      ></input>
      {hasFocus && (
        <p className="newKeep__closeButton" onClick={loseFocus}>
          Close
        </p>
      )}
    </div>
  );
}

export default NewKeep;
