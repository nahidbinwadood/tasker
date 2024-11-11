import { useState } from 'react';
import SearchTask from '../../Components/SearchTask';
import TaskActions from './../../Components/TaskActions';
import TaskList from './../../Components/TaskList';
import AddTaskModal from './AddTaskModal';

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: 'Integration API',
    description:
      'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
    tags: ['web', 'react', 'js'],
    priority: 'High',
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [updatedTask, setUpdatedTask] = useState();

  //functions::
  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleTasks = (task, isUpdate) => {
    if (isUpdate) {
      const updatedTasks = tasks.map((item) => {
        if (item.title === task.title) {
          return task;
        } else {
          return item;
        }
      });
      setTasks(updatedTasks);
     // console.log(tasks);
    } else {
      setTasks([...tasks, task]);
    }
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleUpdateTask = (task) => {
    setUpdatedTask(task);
    setShowModal(true);
  };
  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal handleTasks={handleTasks} updatedTask={updatedTask} setUpdatedTask={setUpdatedTask} />
      )}

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions modal={handleShowModal} />
          <TaskList tasks={tasks} handleUpdateTask={handleUpdateTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
