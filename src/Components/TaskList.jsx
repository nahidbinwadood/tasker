import { FaStar } from 'react-icons/fa';

const TaskList = ({ tasks,handleUpdateTask }) => {
  const colors = [
    '#FF5733B3',
    '#33FF57B2',
    '#5733FFCC',
    '#FF33A0',
    '#33FFD9BF',
    '#FFD933C2',
    '#3399FF',
    '#FF9933B4',
    '#6633FF',
    '#33FF99B7',
  ];

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]" />
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              {' '}
              Title{' '}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              {' '}
              Description{' '}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              {' '}
              Tags{' '}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {' '}
              Priority{' '}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {' '}
              Options{' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <tr
              key={task?.id}
              className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
            >
              <td>
                <button className="cursor-pointer">
                  {task?.isFavorite ? (
                    <FaStar className="size-6 text-yellow-400" />
                  ) : (
                    <FaStar className="size-6" />
                  )}
                </button>
              </td>
              <td className="text-center">{task?.title}</td>
              <td>
                <div>{task?.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task?.tags.map((tag) => (
                    <li key={tag}>
                      <span
                        style={{
                          backgroundColor:
                            colors[Math.floor(Math.random() * 9)],
                        }}
                        className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
                      >
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task?.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button className="text-red-500">Delete</button>
                  <button onClick={()=>handleUpdateTask(task)} className="text-blue-500">Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
