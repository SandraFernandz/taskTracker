import { useSelector } from 'react-redux';

const TaskDuration = () => {
  const totalMinutes = useSelector(({ tasks: { tasksData, searchTask } }) => {
    const filteredTasks = tasksData.filter((task) => {
      return task.name.toLowerCase().includes(searchTask.toLowerCase());
    });
    // let duration = 0;
    // for (let task of filteredTasks) {
    //  duration += task.duration;
    // }
    //return duration;
    // can also be calculated with a reducer:
    return filteredTasks.reduce((acc, task) => {
      return acc + task.duration;
    }, 0);
  });
  return <div>Total Minutes: {totalMinutes}</div>;
};

export default TaskDuration;
