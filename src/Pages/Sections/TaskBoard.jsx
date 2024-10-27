import { useState } from 'react';
import SearchTask from '../../Components/SearchTask';
import TaskActions from './../../Components/TaskActions';
import TaskList from './../../Components/TaskList';
import AddTaskModal from './AddTaskModal';

const TaskBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal />}

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions modal={handleShowModal} />
          <TaskList />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
