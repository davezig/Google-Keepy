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
        <h1 className="title">Title of Keep</h1>
        {tasks.map((task) => {
          return (
            <div>
              <input type="checkbox"></input>
              {task}
            </div>
          );
        })}

        {/* <div className="checkbox">
          <input type="checkbox"></input>
        </div> */}
      </section>
    </Card>
  );
};

export default Keeps;
