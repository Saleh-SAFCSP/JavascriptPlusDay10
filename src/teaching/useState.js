import React, { useState } from 'react';

const App2 = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Saleh');
  const [colors, setColors] = useState(['red', 'blue']);
  const [user, setUser] = useState({ username: '', password: '', role: '', task: 'ok' });

  const onClick = () => {
    setCounter(counter + 1);
    setName('Ali');
    const oldColors = [...colors];
    oldColors.push('black');
    setColors(oldColors);
  };

  const login = () => {
    setUser({ ...user, username: 'saleh', password: '123', role: 'admin' });
  };

  const username = 'saleh';
  let username2 = username;
  username2 = 'ali';
  console.log(username);

  const arr1 = ['task 1 ', 'task 2 ', 'task 3 ', 'task 4'];
  const arr2 = [...arr1];
  arr2.push('task 5');
  console.log(`arr1`, arr1);

  return (
    <div>
      <h1>Your count is : {counter}</h1>
      <h2>{name}</h2>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
      <h3>{user.username ? 'Welcome to ' + user.username : 'Please login'}</h3>

      <h3>{user.task}</h3>
      <button onClick={onClick}> Click </button>
      <button onClick={login}> Login </button>
    </div>
  );
};

export default App2;
