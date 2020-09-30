import React from 'react';
import '../styles/BingoCard.css';

function BingoSquare({ task, isChecked }) {
    return (
        <div className="bingoSquare">
            <div className="taskText">
                {task.text}
            </div>
        </div>
    )
}

function BingoCard({ tasks }) {
    
    const $tasks = tasks.map((t) => <BingoSquare task={t} />)

    return (
        <div className="BingoCard">{$tasks}</div>
    )
}

export default BingoCard;