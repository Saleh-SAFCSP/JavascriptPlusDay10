import React from 'react';

const TasksForm = ({ message, onChange, addNewTask }) => {
  return (
    <div className='input-group my-3'>
      <input value={message} onChange={onChange} type='text' className='form-control' placeholder='Enter your task' />
      <button onClick={addNewTask} className='btn btn-secondary' type='button'>
        Add task
      </button>
    </div>
  );
};

export default TasksForm;
