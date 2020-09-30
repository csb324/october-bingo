import React, { useState } from 'react';
import '../styles/BingoCard.css';

function BingoSquare({ task, taskIndex, toggle }) {


    const toggleChecked = () =>{
        toggle(taskIndex);
    }

    return (
        <div onClick={toggleChecked} className={ task.isChecked ? 'bingoSquare bingoSquare--checked' : 'bingoSquare'}>
            <div className="taskText">
                {task.text}
            </div>
            <a className="taskLink" href="#" target="_blank">Learn More</a>
        </div>
    )
}

function BingoCard({ tasks, setTasks }) {

    const completeTaskFunc = (taskIndex) => {
        let newTasks = [...tasks];
        let thisTask = newTasks[taskIndex];
        thisTask.isChecked = true;

        setTasks(newTasks);
    }
    
    const $tasks = tasks.map((t, i) => <BingoSquare key={t.text} toggle={completeTaskFunc} taskIndex={i} task={t} />)

    return (
        <div className="BingoCard">{$tasks}</div>
    )
}

export default BingoCard;