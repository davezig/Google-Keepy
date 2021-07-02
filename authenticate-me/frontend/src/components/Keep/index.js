import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskThunk, createTaskThunk } from '../../store/keeps';
import Card from '../Ui/Card';
import './Keep.css';

const Keep = (props) => {
  const dispatch = useDispatch();
  const { [props.id]: keep } = useSelector((state) => state.keeps);
  // this is destructured and the key is the value of props.id and then the :keep is assigning the destructured value to the alias of keep

  // const currTaskList = keep?.tasks || [];
  // above is commented because it wasn't being used in the code yet and threw an error in react
  const [newTaskInputField, setNewTaskInputField] = useState('');

  const completedTasks = [];
  const notCompletedTasks = [];
  function updateTaskInputField(event) {
    setNewTaskInputField(event.target.value);
  }

  function updateCompleted(event, taskId) {
    dispatch(
      updateTaskThunk(props.id, taskId, { isComplete: event.target.checked })
    );
  }

  function createNewTask(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      dispatch(
        createTaskThunk(props.id, {
          description: newTaskInputField,
          isComplete: false,
          position: 0,
        })
      );
      setNewTaskInputField('');
    }
  }

  for (const taskId in keep.tasks) {
    const task = keep.tasks[taskId];
    const template = (
      <div
        className={task.isComplete ? 'completed' : ''}
        key={`task-${taskId}`}
      >
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={(event) => updateCompleted(event, taskId)}
        ></input>
        {task.description}
      </div>
    );

    if (!task.isComplete) {
      notCompletedTasks.push(template);
    } else {
      completedTasks.push(template);
    }
  }

  return (
    <div className="keep">
      <h1 className="keep__title">{keep?.title || 'Title not found'}</h1>
      {notCompletedTasks}
      <input
        type="text"
        onKeyPress={createNewTask}
        value={newTaskInputField}
        onInput={updateTaskInputField}
        placeholder="+ List item"
      ></input>
      <div className="keep__completedTasks">
        <p>{completedTasks.length} Completed Items</p>
        <div>{completedTasks}</div>
      </div>
    </div>
  );
};

export default Keep;
