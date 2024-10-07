import React, { useEffect, useState } from 'react';
import { deleteTask, toggleTask, updateTask } from '../Redux/Slices/todoslice';
import { useDispatch } from 'react-redux';

function TaskItem({ task }) {

    const dispatch = useDispatch();
    const [showField, setShowField] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(task.title);
    }, [task.title]);

    function handleUpdate() {
        setShowField(!showField);
        if (showField) {
            dispatch(updateTask({ ...task, title }));
        }
    }

    return (
        <li className="pt-6 pb-6 sm:pb-8">
            <div className="flex items-center justify-between">
                {/* Task Title or Input Field */}
                <div className="flex-1 min-w-0">
                    {
                        showField ? (
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                className="block w-full p-2 text-lg border-b-2 border-blue-300 bg-gray-50 focus:outline-none focus:border-blue-600 rounded-md"
                                placeholder="Update task title"
                                required
                            />
                        ) : (
                            <p className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'} truncate`}>
                                {task.id} {task.title}
                            </p>
                        )
                    }
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 ml-4">
                    <button
                        onClick={() => dispatch(toggleTask(task.id))}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                    >
                        Toggle
                    </button>
                    <button
                        onClick={handleUpdate}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300"
                    >
                        {showField ? 'Validate' : 'Update'}
                    </button>
                    <button
                        onClick={() => dispatch(deleteTask(task.id))}
                        className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
}

export default TaskItem;
