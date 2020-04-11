import React, { useState } from 'react'

export const Task = (props) => {
    const [updateTask, setTask] = useState({value: ""})

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <br></br>
            <input value={updateTask.value} type="text"
                onChange={e => setTask({value: e.target.value})}
                placeholder="Add a task"/>
            <button type="submit">Add</button>
            <button onClick={() => props.onClear()}>Clear Completed</button>
        </form>
    )
    
    function handleSubmit(e) {
        e.preventDefault()
        props.onSubmit(updateTask.value)
        setTask({ value: "" })
    }
}