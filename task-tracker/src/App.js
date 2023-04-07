import ListForm from './components/ListForm';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import TaskDuration from './components/TaskDuration';

const App = () => {
  return (
    <div>
      <ListForm />
      <TaskSearch />
      <TaskList />
      <TaskDuration />
    </div>
  );
};

export default App;
