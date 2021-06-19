import { useState } from 'react';
import './NewKeep.css';

function NewKeep() {
  const [title, setTitle] = useState('');
  const [hasFocus, setHasFocus] = useState(false);
  const [currTaskList, setCurrTaskList] = useState([]);
  const [newTaskInputField, setNewTaskInputField] = useState('');

  let counter = 0;

  function getFocus(event) {
    setHasFocus(true);
  }

  function loseFocus(event) {
    event.stopPropagation();
    setHasFocus(false);
  }

  function createNewTask(event) {
    if (event.code == 'Enter' || event.code == 'NumpadEnter') {
      const task = {
        description: newTaskInputField,
        isComplete: false,
        position: counter,
      };
      setCurrTaskList([...currTaskList, task]);
      counter++;
    }
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

      {currTaskList.map((task) => (
        <p>{task.description}</p>
      ))}

      <input
        onKeyPress={createNewTask}
        type="text"
        value={newTaskInputField}
        placeholder="Take a note..."
        onInput={(event) => setNewTaskInputField(event.target.value)}
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
