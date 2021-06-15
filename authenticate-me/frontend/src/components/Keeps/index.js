import React, { useState } from 'react';
import Card from '../Ui/Card';
import './Keeps.css';

// TODO: pass in props to use in title, etc
const Keeps = (props) => {
  const currTaskList = props.taskList || [];
  const [tasks, setTasks] = useState(currTaskList);

  return (
    <Card>
      <section>
        <h1 className="title">{props.title || 'ThisIsTemp'}</h1>
        {tasks.map((task) => {
          return (
            <div>
              <input type="checkbox" checked={task.isComplete}></input>
              {task.description}
            </div>
          );
        })}
      </section>
    </Card>
  );
};

export default Keeps;
