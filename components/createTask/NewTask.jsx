import module from "./NewTask.module.sass";
import { IoCloseSharp } from "react-icons/io5";

const NewTask = ({ newTask, handleCreateNewTask }) => {
  const HandlePreventEvent = (e) => e.preventDefault();

  return (
    <div
      className={module.wrapper}
      style={newTask ? { display: "flex" } : { display: "none" }}
    >
      <form
        action="post"
        method="post"
        className={module.form}
        onClick={HandlePreventEvent}
      >
        <span className={module.label}>
          create a new task{" "}
          <IoCloseSharp
            className={module.sharp}
            onClick={handleCreateNewTask}
          />
        </span>

        <span className={module.wrapper_title}>
          <input type="text" placeholder="title" className={module.title} />
        </span>
        <span className={module.wrapper_title}>
          <input
            type="text"
            placeholder="type task"
            className={module.task_type}
          />
        </span>
        <span className={module.wrapper_title}>
          <textarea
            className={module.content}
            placeholder="content"
            maxLength="200"
          />
        </span>
        <button className={module.create_task}>create task</button>
      </form>
    </div>
  );
};

export default NewTask;
