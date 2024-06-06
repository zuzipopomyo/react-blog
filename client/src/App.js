// src/App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default App;
