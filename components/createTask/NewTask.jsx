import module from "./NewTask.module.sass";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const NewTask = ({ newTask, handleCreateNewTask, create }) => {
  const [Title, setTitle] = useState("");
  const [TypeTask, setTypeTask] = useState("");
  const [Content, setContent] = useState("");
  const identity = Math.floor(Math.random() * (10000 - 100) + 100);

  function handleCreateTask(e) {
    e.preventDefault();

    create(identity, TypeTask, Title, Content);
  }
  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }
  function handleChangeTypeTask(e) {
    setTypeTask(e.target.value);
  }
  function handleChangeContent(e) {
    setContent(e.target.value);
  }

  return (
    <div
      className={module.wrapper}
      style={newTask ? { display: "flex" } : { display: "none" }}
    >
      <form
        action="post"
        method="post"
        className={module.form}
        onSubmit={handleCreateTask}
      >
        <span className={module.label}>
          create a new task{" "}
          <IoCloseSharp
            className={module.sharp}
            onClick={handleCreateNewTask}
          />
        </span>

        <span className={module.wrapper_title}>
          <input
            type="text"
            placeholder="title"
            className={module.title}
            onChange={handleChangeTitle}
          />
        </span>
        <span className={module.wrapper_title}>
          <input
            type="text"
            placeholder="type task"
            className={module.task_type}
            onChange={handleChangeTypeTask}
          />
        </span>
        <span className={module.wrapper_title}>
          <textarea
            className={module.content}
            placeholder="content"
            onChange={handleChangeContent}
            maxLength="200"
          />
        </span>
        <button className={module.create_task}>create task</button>
      </form>
    </div>
  );
};

export default NewTask;
