import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../store/slices/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks: { tasksData, searchTask } }) => {
    return tasksData.filter((task) =>
      task.name.toLowerCase().includes(searchTask.toLowerCase())
    );
  });
  const handleTaskDelete = (task) => {
    dispatch(removeTask(task.id));
  };
  const renderedTasks = tasks.map((task) => {
    return (
      <div key={task.id} className="taskList">
        <p>
          {task.name} {task.duration} Minutes
        </p>
        <button onClick={() => handleTaskDelete(task)}>Delete</button>
      </div>
    );
  });
  return <div>{renderedTasks}</div>;
};

export default TaskList;
