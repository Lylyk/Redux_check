import { createSlice } from "@reduxjs/toolkit";


export let initialState = {
    TaskList : [
        {id: 1, title: "Task 1", completed: false},
        {id: 2, title: "Task 2", completed: true},
        {id: 3, title: "Task 3", completed: false},
    ],
    filter :'all'
}

const TaskSlice = createSlice ({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.TaskList.push(action.payload)
            /* return {...state, TaskList: [...state.TaskList, action.payload]}; */
        },
        toggleTask: (state, action) => {
            return {...state, TaskList: state.TaskList.map(task => task.id === action.payload? {...task, completed:!task.completed} : task)};
        },
        deleteTask: (state, action) => {
            state.TaskList = state.TaskList.filter(task => task.id!== action.payload);
/*             return {...state, TaskList: state.TaskList.filter(task => task.id!== action.payload)};
 */        },
        updateTask: (state, action) => {
            return {...state, TaskList: state.TaskList.map(task => task.id === action.payload.id? {...task,...action.payload} : task)};
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
    }

})

export const {addTask, toggleTask, deleteTask, updateTask,changeFilter} = TaskSlice.actions;

export default TaskSlice.reducer