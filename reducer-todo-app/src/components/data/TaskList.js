import React from 'react'
import './TaskList.css'

export const TaskList = (props) => {
    const { item, id, completed } = props.item

    const classNames = completed ? "completed" : "active"

    return (
        <div className={classNames} onClick={ () => props.onClick(id) }>
            {item}
        </div>
    )
}