import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Keeps from './components/Keeps';
import Splash from './components/Splash';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const taskList = [
    { description: 'Test thing', isComplete: true, position: 0 },
    { description: 'Other thing', isComplete: false, position: 3760746300 },
    { description: 'Third things to do', isComplete: true, position: 1 },
    { description: 'These are dynamic now', isComplete: false, position: 9 },
    { description: 'boom boom position is 2', isComplete: true, position: 2 },
  ];

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Keeps taskList={taskList} />
      <Keeps taskList={taskList} />
      <Keeps taskList={taskList} />
      <Keeps />
    </>
  );
}

export default App;
