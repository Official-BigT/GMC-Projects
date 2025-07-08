import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Task({ task }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [desc, setDesc] = useState(task.description);

  const toggleDone = () => dispatch({ type: "TOGGLE_TASK", payload: task.id });
  const saveEdit = () => {
    dispatch({ type: "EDIT_TASK", payload: { id: task.id, description: desc } });
    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</span>
          <button onClick={toggleDone}>{task.isDone ? "Undo" : "Done"}</button>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Task;
// The `Task` component is responsible for displaying individual tasks, allowing users to toggle their completion
