const TasksList = ({ tasks }) => {
  return (
    <ul className='list-group'>
      {tasks.map((task) => (
        <li className='list-group-item'>{task}</li>
      ))}
    </ul>
  );
};

export default TasksList;
