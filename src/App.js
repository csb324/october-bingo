import React, { useState, useEffect } from 'react';
import './App.css';
import taskBank from './lib/taskBank';
import BingoCard from './components/BingoCard';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('octoberBingoTasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('octoberBingoTasks', JSON.stringify(tasks));
  }, [tasks])

  const initTask = (task) => {
    return {
      text: task,
      isChecked: false
    }
  }

  const initializeTasks = () => {
    let arr = [];
    while(arr.length < 25){
        let r = Math.floor(Math.random() * taskBank.length);
        if(arr.indexOf(r) === -1) arr.push(initTask(taskBank[r]));
        if(arr.length === 12) arr.push(initTask("VOTE"));
    }
    setTasks(arr)
  }

  if (tasks.length < 25) initializeTasks();

  return (
    <div className="App">

      <Header />

      <div className="mainContainer">
        <button onClick={initializeTasks}>Reset!</button>
        <BingoCard className="BingoCard" tasks={tasks} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
