import { useDispatch, useSelector } from 'react-redux';
import { changeDuration, changeName, addTask } from '../store';

const TaskForm = () => {
  const dispatch = useDispatch();
  const { name, duration } = useSelector((state) => {
    return {
      name: state.form.name,
      duration: state.form.duration,
    };
  });
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleDurationChange = (event) => {
    const taskDuration = parseInt(event.target.value) || 0;
    dispatch(changeDuration(taskDuration));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask({ name: name, duration: duration }));
  };
  return (
    <div>
      <h4>Add Task</h4>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <div>
            <label className="label">Name </label>
            <input value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label className="label">Duration </label>
            <input
              value={duration}
              onChange={handleDurationChange}
              type="number"
            />
          </div>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
