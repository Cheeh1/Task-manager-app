import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { deleteTask, markAsCompleted } from "../store";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const handleComplete = (taskId: number) => {
    dispatch(markAsCompleted(taskId));
  };

  return (
    <>
      <section className="flex flex-col gap-3 py-8">
        {tasks.map((task) => (
          <div
            className={`relative flex flex-col gap-2 items-start text-white py-5 px-5 mx-5 rounded-xl ${
              task.completed ? "bg-gray-500" : "bg-gray-900"
            }`}
            key={task.id}
          >
            <h2
              className={`font-bold text-2xl ${
                task.completed ? "line-through" : ""
              } md:w-96 lg:w-96`}
            >
              {task.title}
            </h2>
            <div
              className="absolute right-10 cursor-pointer"
              onClick={() => handleDelete(task.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </div>
            <p className={`lg:w-96 md:w-96 ${task.completed ? "line-through" : ""}`}>
              {task.description}
            </p>
            <div className="flex md:gap-20 lg:gap-20">
              <div className="flex flex-col">
                <p className="font-medium">Date</p>
                <p className={`${task.completed ? "line-through" : ""} w-40`}>
                  {new Date(task.date).toUTCString().split("00:00:00")[0]}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-medium">Time</p>
                <p className={`${task.completed ? "line-through" : ""}`}>
                  {task.time}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium">Mark As Completed</p>
              <input
                type="checkbox"
                name="completed"
                id="completed"
                className="cursor-pointer"
                onClick={() => handleComplete(task.id)}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default TaskList;
