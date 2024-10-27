import toast from 'react-hot-toast';

const AddTaskModal = ({ handleAddNewTask, updatedTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const tags = form.tags.value.split(',');
    const priority = form.priority.value;
    const task = { title, description, tags, priority };
    if (task) {
      toast.success('Task added successfully');
    }
    handleAddNewTask(task);
  };
  return (
    <>
      <div className="w-full h-full bg-black/20 z-10 fixed inset-0 backdrop-blur"></div>
      <form
        onSubmit={handleSubmit}
        className="fixed top-[55%] left-1/2 z-20 w-full max-w-[740px] transform -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {updatedTask ? 'Update Task' : 'Add New Task'}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              defaultValue={updatedTask ? updatedTask?.title : ''}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              defaultValue={updatedTask ? updatedTask?.description : ''}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                defaultValue={updatedTask ? updatedTask?.tags : ''}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                defaultValue={updatedTask ? updatedTask?.priority : ''}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {updatedTask ? "Save" : "Create new Task"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
