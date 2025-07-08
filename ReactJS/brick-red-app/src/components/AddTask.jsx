import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({
        type: "ADD_TASK",
        payload: {
          id: Date.now(),
          description: text,
          isDone: false
        }
      });
      setText('');
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task..." />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
