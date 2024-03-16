import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import TaskList from './TaskList';
import CompletionStatusBar from "./CompletionStatusBar";


function App() {


  return (
    <div className="App">
      <Header />
      <TaskList />
      <CompletionStatusBar />
    </div>
  );
}

export default App;

// TODO: create tasks in tasks.json
// TODO: Redux
// TODO: Formik