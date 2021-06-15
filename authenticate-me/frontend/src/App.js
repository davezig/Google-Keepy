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
    { description: 'Test thing', isComplete: true },
    { description: 'Other thing', isComplete: false },
    { description: 'Third things to do', isComplete: true },
    { description: 'These are dynamic now', isComplete: false },
    { description: 'boom boom', isComplete: true },
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
