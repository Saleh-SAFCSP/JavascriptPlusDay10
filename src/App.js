import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TasksList from './components/TasksList';
import React, { useState } from 'react';
import TasksForm from './components/TasksForm';

function App() {
  const title = 'Tasks Tracker';
  const navbarList = ['Home', 'About'];
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');

  const addNewTask = () => {
    const oldTasks = [...tasks];
    oldTasks.push(message);
    setTasks(oldTasks);
    setMessage('');
  };
  const onChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  return (
    <div className='main'>
      <Navbar mainTitle={title} navbarList={navbarList} />
      <div className='container p-5 rounded'>
        <h1 className='p-3 text-center'>{title}</h1>
        <TasksList tasks={tasks} />
        <TasksForm message={message} addNewTask={addNewTask} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
