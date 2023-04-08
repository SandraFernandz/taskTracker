import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTask } from '../store';

const TaskSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.tasks.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTask(event.target.value));
  };
  return (
    <div>
      <div>My Tasks</div>
      <div>
        <label>Search</label>
        <input value={searchTerm} onChange={handleSearchTermChange} />
      </div>
    </div>
  );
};

export default TaskSearch;
