import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </div>
  );
}

export default ListTask;
// This component retrieves the list of tasks from the Redux store and renders a Task component for each task.
// It uses the `useSelector` hook to access the tasks from the Redux state, ensuring that the component re-renders whenever the tasks change.