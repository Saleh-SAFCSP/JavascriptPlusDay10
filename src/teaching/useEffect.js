import React, { useEffect, useState } from 'react';

const App2 = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Ali');
  const [role, setRole] = useState('User');
  const [users, setUsers] = useState([]);

  // Runs on every render of the page
  useEffect(() => {
    console.log(`Use Effect ran 1 !`);
  });

  // Runs only in the first render of the page
  useEffect(() => {
    console.log(`Use Effect ran  2 !`);
  }, []);

  // Runs on first render of the page and on every change of the name state using setName
  useEffect(() => {
    console.log(`Use Effect ran  3 !`);
  }, [name]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const request = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const data = await request.json();
  //       setUsers(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUsers(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  const onClick = () => {
    setCounter(counter + 1);
  };

  const changeName = () => {
    setName('Saleh');
  };

  const changeRole = () => {
    setRole('Admin');
  };

  console.log('Hey from main !');
  return (
    <div>
      <h1>The current count is : {counter}</h1>
      <button onClick={onClick}>Click me to add one </button>
      <h1>The current name is : {name}</h1>
      <button onClick={changeName}>Click me to change name </button>
      <h1>The current role is : {role}</h1>
      <button onClick={changeRole}>Click me to change role </button>

      {users.length === 0 ? <h1>loading ....</h1> : users.map((user, index) => <li key={index}>{user.email}</li>)}
    </div>
  );
};

export default App2;
