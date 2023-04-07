import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => {
    return state.tasks.tasksData;
  });
  console.log(tasks);
  return <div>TaskForm</div>;
};

export default TaskList;
