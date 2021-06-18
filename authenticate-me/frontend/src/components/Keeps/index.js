import React, { useState } from 'react';
import Card from '../Ui/Card';
import './Keeps.css';

// []TODO: pass in props to use in title, etc
// []TODO: create a form to make a new keep item
const Keeps = () => {
  const initialValue = [
    'Test thing',
    'Other thing',
    'Third thing to do',
    'These are constants in Keeps/index.js',
  ];

  const [tasks, setTasks] = useState(initialValue);

  return (
    <Card>
      <section>
        <ul>
          <h1 className="title">Title of Keep</h1>
          {tasks.map((task) => {
            return (
              <div>
                <input type="checkbox"></input>
                <li>{task}</li>
              </div>
            );
          })}

          {/* <div className="checkbox">
          <input type="checkbox"></input>
        </div> */}
        </ul>
      </section>
    </Card>
  );
};

export default Keeps;
