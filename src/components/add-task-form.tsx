import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../store/store';
import { addTask } from '../store/task-slice';

const AddTaskForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);
  const [project, setProject] = useState<'Personal' | 'Work'>('Personal');

  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addTask({ name, project }));
      setName('');
    }
  };

  return (
    <div>
      <h2>Add Task Form</h2>
      <form onSubmit={handleAdd}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input type='radio' value={status} onChange={(e) => setName(e.target.value)} /> */}
        <input
          type='text'
          value={project}
          onChange={(e) => setProject(e.target.value as 'Personal' | 'Work')}
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
