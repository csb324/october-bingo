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
      isChecked: false,
      ...task
    }
  }

  const initializeTasks = () => {
    setTasks([]);
    let arr = [];
    let chosenTasks = [];

    while(arr.length < 25){
        let r = Math.floor(Math.random() * taskBank.length);
        let thisTask = initTask(taskBank[r]);

        if(chosenTasks.indexOf(taskBank[r].title) === -1) arr.push(thisTask);
        chosenTasks.push(taskBank[r].title);

        if(arr.length === 12) arr.push(initTask({title: "VOTE"}));
    }

    setTasks(arr);
  }

  if (tasks.length < 25) initializeTasks();

  return (
    <div className="App">

      <Header />

      <div className="mainContainer">
        <div className="cardHeader">
          <h2 className="cardTitle">My Card</h2>
          <button className="resetButton" onClick={initializeTasks}>Shuffle!</button>
        </div>
        
        <BingoCard className="BingoCard" tasks={tasks} setTasks={setTasks} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
