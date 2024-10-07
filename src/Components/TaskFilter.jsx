import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../Redux/Slices/todoslice';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.task.filter);

  const updateFilter = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  const getButtonClasses = (buttonFilter) =>
    `px-5 py-2 font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg ${
      filter === buttonFilter
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500'
        : 'bg-gray-200 text-gray-600 hover:bg-blue-500 hover:text-white dark:bg-slate-700 dark:text-gray-400 dark:hover:bg-blue-600'
    }`;

  return (
    <section className="container mx-auto mt-6">
      <div className="flex justify-center gap-6 rounded-lg bg-white p-6 transition-all duration-700 shadow-md dark:bg-slate-800">
        <button
          onClick={() => updateFilter('all')}
          type="button"
          className={getButtonClasses('all')}
        >
          All
        </button>
        <button
          onClick={() => updateFilter('active')}
          type="button"
          className={getButtonClasses('active')}
        >
          Active
        </button>
        <button
          onClick={() => updateFilter('completed')}
          type="button"
          className={getButtonClasses('completed')}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TaskFilter;
