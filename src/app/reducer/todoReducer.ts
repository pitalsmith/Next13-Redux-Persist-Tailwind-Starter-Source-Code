import { log } from "console";

const initialState = { todos: [
    {
        id: 1,
        title: 'todo1',
        description: 'description'
    },
    {
        id: 2,
        title: 'todo2',
        description: 'description2'
    },
]

}

export const todoReducer =( state = initialState, action:any) => {
    switch(action.type){
        case 'ADD_TODO':
            console.log({
                ...state,
                todos:[...state.todos, action.payload]
            });
            
            return {
                ...state,
                todos:[...state.todos, action.payload]
            };
        default:
            return state;
    }
}