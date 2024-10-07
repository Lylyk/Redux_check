import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Slices/todoslice';

function TaskForm(props) {
    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setTaskTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskTitle.trim() !== '') {
        dispatch(addTask({ id: Date.now(), title: taskTitle, completed: false }));
        setTaskTitle(''); // Clear the input after submitting
        props.toggleFormVisibility(); // Close the form after submission
        }
    };

    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg mx-auto mt-10 transition-all duration-500 ease-in-out dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Add a New Task
        </h2>
        <form onSubmit={handleSubmit}>
            <div className="relative z-0 mb-8 group">
            <input
                onChange={handleChange}
                value={taskTitle}
                type="text"
                name="taskTitle"
                id="taskTitle"
                className="block w-full px-4 py-3 text-lg bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-0 transition duration-300 dark:border-gray-600 dark:text-white"
                placeholder=" "
                required
            />
            <label
                htmlFor="taskTitle"
                className="absolute text-lg text-gray-500 dark:text-gray-400 transition-all duration-300 transform -translate-y-6 scale-75 top-4 left-4 peer-focus:left-4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
                Task Title
            </label>
            </div>

            <div className="flex justify-between space-x-4">
            <button
                type="submit"
                className="flex-1 py-3 px-5 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            >
                Add Task
            </button>
            <button
                type="button"
                onClick={props.toggleFormVisibility}
                className="flex-1 py-3 px-5 text-lg font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300"
            >
                Cancel
            </button>
            </div>
        </form>
        </div>
    );
}

export default TaskForm;
