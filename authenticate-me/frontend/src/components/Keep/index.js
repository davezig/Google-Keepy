import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskThunk } from '../../store/keeps';
import Card from '../Ui/Card';
import './Keep.css';

const Keep = (props) => {
  const dispatch = useDispatch();
  const { [props.id]: keep } = useSelector((state) => state.keeps);
  // this is destructured and the key is the value of props.id and then the :keep is assigning the destructured value to the alias of keep

  const currTaskList = keep?.tasks || [];
  const [tasks, setTasks] = useState(currTaskList);

  const completedTasks = [];
  const notCompletedTasks = [];

  function updateCompleted(event, taskId) {
    dispatch(
      updateTaskThunk(props.id, taskId, { isComplete: event.target.checked })
    );
  }

  for (const taskId in keep.tasks) {
    const task = keep.tasks[taskId];
    const template = (
      <div className={task.isComplete ? 'completed' : ''}>
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
    <Card>
      {/* <section> */}
      {/* section might not be needed */}
      <h1 className="title">{keep?.name || 'Title not found'}</h1>
      {notCompletedTasks}
      {completedTasks}
      {/* </section> */}
    </Card>
  );
};

export default Keep;
