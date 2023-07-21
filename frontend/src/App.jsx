import React, { useState, useReducer, Fragment } from "react";
import axios from 'axios';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Context, initialState } from './store/Context';
import { reducer } from './store/reducer';

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import Desktop from "./Desktop";

// Predict component
function Predict() {
  const [userInput, setUserInput] = useState('');
  const [predictions, setPredictions] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/recommend', { userInput });
      setPredictions(response.data.predictions);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Get Recommendations</button>
      <div>
        {predictions.map((prediction, index) => (
          <p key={index}>{prediction}</p>
        ))}
      </div>
    </div>
  );
}

// RouteElementsDesktop component
function RouteElementsDesktop() {
  const routeElements = useRoutes([
    { path: '/', element: <Desktop /> },
  ]);
  return routeElements
}

// DesktopApp component
function DesktopApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <RouteElementsDesktop />
        <Predict />
      </BrowserRouter>
    </Context.Provider>
  )
}

// App component
function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return (
      <Fragment>
        <DesktopApp />
        <ChatsPage user={user} />
      </Fragment>
    );
  }
}

export default App;
