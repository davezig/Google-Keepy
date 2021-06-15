import React, { useState } from 'react';
import Card from '../Ui/Card';
import './Keeps.css';

const Keeps = (props) => {
  const currTaskList = props.taskList || [];
  const [tasks, setTasks] = useState(currTaskList);

  const completedTasks = [];
  const notCompletedTasks = [];

  tasks.forEach((task) => {
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
  });

  return (
    <Card>
      {/* <section> */}
      {/* section might not be needed */}
      <h1 className="title">{props.title || 'ThisIsTemp'}</h1>
      {notCompletedTasks}
      {completedTasks}
      {/* </section> */}
    </Card>
  );
};

export default Keeps;
