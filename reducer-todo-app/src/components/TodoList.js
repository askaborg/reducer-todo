import React, { useReducer } from 'react'

import { todoReduce, initialTodoState } from '../reducers'
import { Task } from './forms'
import { TaskList } from './data'

export const TodoList = () => {
    const [ state, dispatch ] = useReducer(todoReduce, initialTodoState)

    return (
      <div>
        {
          state.items.map( item => {
            return (<TaskList item={item} 
                onClick={ id => dispatch({ type: 'TOGGLE_COMPLETED',
                payload: id })} />
                )
          })
        }
        <Task onClear={ () => dispatch({type: 'CLEAR_COMPLETED'}) }
            onSubmit={ (item) => dispatch({ type: 'ADD_TODO', payload: item })} />
      </div>
    )
}