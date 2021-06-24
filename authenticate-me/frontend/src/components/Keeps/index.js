import { useSelector } from 'react-redux';
// import React, { useState } from 'react';
// import Card from '../Ui/Card';
//  Card & useState was not being used yet. React error
import Keep from '../Keep';

import './Keeps.css';

// []TODO: pass in props to use in title, etc
// []TODO: create a form to make a new keep item
const Keeps = () => {
  const keeps = useSelector((state) => state.keeps);

  return (
    <div className="keepsList">
      {Object.keys(keeps).map((keepId) => (
        <Keep key={`keep-${keepId}`} id={keepId} />
        // <Keep key={`keep-`} id="string" />
      ))}
    </div>
  );
};

export default Keeps;
