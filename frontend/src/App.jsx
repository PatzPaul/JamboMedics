import { useState, useReducer, Fragment } from "react";

import "./App.css";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Context, initialState } from './store/Context';
import { reducer, } from './store/reducer';

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import Desktop from "./Desktop";

function RouteElementsDesktop() {
  const routeElements = useRoutes([
    { path: '/', element: <Desktop /> },
  ]);
  return routeElements
}

function DesktopApp() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <RouteElementsDesktop />
      </BrowserRouter>
    </Context.Provider>
  )
}


function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <Fragment>
      <DesktopApp />;
      <ChatsPage user={user} />

    </Fragment>;
  }

}

export default App;