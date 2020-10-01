import React from 'react';
import '../styles/BingoCard.css';

function BingoSquare({ task, taskIndex, toggle }) {


    const toggleChecked = () =>{
        toggle(taskIndex);
    }

    const taskLink = () => {
        if (task.link) {
            return (
                <div className="taskLinkContainer">
                    <a className="taskLink" href={task.link} rel="noopener noreferrer" target="_blank">{task.linkText || "Learn More"}</a>
                </div>
            )
        } else {
            return null;
        }
    }


    return (
        <div onClick={toggleChecked} className={ task.isChecked ? 'bingoSquare bingoSquare--checked' : 'bingoSquare'}>
            <div className="bingoCheckbox"></div>
            <div className="taskTextContainer">
                <div className={ task.title === 'VOTE' ? 'taskText taskText--vote' : 'taskText' }>
                    {task.title}
                </div>
            </div>
            { taskLink() }
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