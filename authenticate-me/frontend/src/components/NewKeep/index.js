import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewKeepThunk } from '../../store/keeps';
import './NewKeep.css';

function NewKeep() {
  const [title, setTitle] = useState('');
  const [hasFocus, setHasFocus] = useState(false);
  const [currTaskList, setCurrTaskList] = useState([]);
  const [newTaskInputField, setNewTaskInputField] = useState('');
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  function resetNewKeep() {
    setTitle('');
    setCurrTaskList([]);
    setNewTaskInputField('');
    setCounter(0);
  }

  function getFocus(event) {
    setHasFocus(true);
  }

  function loseFocus(event) {
    event.stopPropagation();
    setHasFocus(false);
    dispatch(createNewKeepThunk(title, currTaskList));
    resetNewKeep();
  }

  function createNewTask(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      const task = {
        description: newTaskInputField,
        isComplete: false,
        position: counter,
      };
      setCurrTaskList([...currTaskList, task]);
      setNewTaskInputField('');
      setCounter(counter + 1);
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
        className="newKeep__newTask"
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
