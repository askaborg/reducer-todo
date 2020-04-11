export const initialTodoState = {
    items: [
        {
            item: "Learn about reducers",
            completed: false,
            id: 3892987589
        }
    ]
}

export const todoReduce = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                items: [
                    ...state.items,
                    { item: action.payload, completed: false, id: Date.now() }
                ]
            }

        case "TOGGLE_COMPLETED":
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    else return item
                })
            }

        case "CLEAR_COMPLETED":
            return {
                ...state,
                items: state.items.filter(item => !item.completed)
            }
            
        default: 
            return state
    }
}