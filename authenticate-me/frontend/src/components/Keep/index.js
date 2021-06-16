import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Ui/Card';
import './Keep.css';

const Keep = (props) => {
  const { [props.id]: keep } = useSelector((state) => state.keeps);
  // this is destructured and the key is the value of props.id and then the :keep is assigning the destructured value to the alias of keep

  const currTaskList = keep?.tasks || [];
  const [tasks, setTasks] = useState(currTaskList);

  const completedTasks = [];
  const notCompletedTasks = [];

  for (const taskId in keep.tasks) {
    const task = keep.tasks[taskId];
    if (!task.isComplete) {
      notCompletedTasks.push(
        <div>
          <input type="checkbox"></input>
          {task.description}
        </div>
      );
    } else {
      completedTasks.push(
        <div>
          <input type="checkbox" checked></input>
          {task.description}
        </div>
      );
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
