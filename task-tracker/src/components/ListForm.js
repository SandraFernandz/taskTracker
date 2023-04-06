import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

const TaskForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name;
  });
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  return (
    <div>
      <h4>Add Task</h4>
      <form>
        <div>
          <div>
            <label>Name</label>
            <input value={name} onChange={handleNameChange}></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
