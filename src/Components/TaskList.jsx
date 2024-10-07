import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { useSelector } from 'react-redux';
import TaskFilter from './TaskFilter';

function TaskList() {
    const tasks = useSelector((state) => state.task.TaskList);
    const filter = useSelector((state) => state.task.filter);

    const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility

    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !prev); // Toggle form visibility
    };

    const filteredTasks = () => {
        switch (filter) {
        case 'active':
            return tasks.filter((t) => !t.completed);
        case 'completed':
            return tasks.filter((t) => t.completed);
        case 'all':
        default:
            return tasks;
        }
    };

    return (
        <div className="container mx-auto mt-10 p-4 bg-white dark:bg-slate-900 shadow-lg rounded-lg transition-all duration-500">
        <button
            type="button"
            onClick={toggleFormVisibility}
            className="block mx-auto mb-6 w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-6 py-3 transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg"
        >
            + New Task
        </button>

        {isFormVisible && (
            <div className="mt-4">
            <TaskForm toggleFormVisibility={toggleFormVisibility} />
            </div>
        )}

        <TaskFilter />

        <ul className="mt-6 space-y-4">
            {filteredTasks().map((task) => (
            <TaskItem key={task.id} task={task} />
            ))}
        </ul>
        </div>
    );
}

export default TaskList;
