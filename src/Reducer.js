

export let initialState = {
    TaskList : [
        {id: 1, title: "Task 1", completed: false},
        {id: 2, title: "Task 2", completed: true},
        {id: 3, title: "Task 3", completed: false},
    ],
}

export const reducer =(state, action) => {
    switch(action.type){
        case "LOAD_STATE":
            console.log('action.payload',action.payload)
            return {...state, TaskList: action.payload}
        case "ADD_TASK":
            return {...state, TaskList: [...state.TaskList, action.payload]};
        case "TOGGLE_TASK":
            return {...state, TaskList: state.TaskList.map(task => task.id === action.payload? {...task, completed:!task.completed} : task)};
        case "DELETE_TASK":
            return {...state, TaskList: state.TaskList.filter(task => task.id!== action.payload)};
        case "UPDATE_TASK":
            return {...state, TaskList: state.TaskList.map(task => task.id === action.payload.id? {...task,...action.payload} : task)};
        default:
            return state;
    }
}
