import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../store/slices/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, name } = useSelector(
    ({ form, tasks: { tasksData, searchTask } }) => {
      const filteredTasks = tasksData.filter((task) =>
        task.name.toLowerCase().includes(searchTask.toLowerCase())
      );
      return {
        tasks: filteredTasks,
        name: form.name,
      };
    }
  );
  const handleTaskDelete = (task) => {
    dispatch(removeTask(task.id));
  };
  const renderedTasks = tasks.map((task) => {
    // decide if this task should be bold
    // state.form.name
    const bold = name && task.name.toLowerCase().includes(name.toLowerCase());
    console.log(bold);
    return (
      <div key={task.id} className={`taskList ${bold && 'bold'}`}>
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
