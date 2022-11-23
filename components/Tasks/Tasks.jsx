/* eslint-disable react/no-unescaped-entities */
import TypeTask from "../TypeTask/TypeTask";
import module from "./Tasks.module.sass";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  AiTwotoneDelete,
  AiTwotoneEdit,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import Axios from "../../api/api";
import { useEffect, useState } from "react";

const Tasks = ({
  typeOne,
  typeTwo,
  colorOne,
  colorTwo,
  typetitle,
  title,
  content,
  edit,
  del,
  id,
  status,
}) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [changeInputEditorTask, setInputEditorTask] = useState("");
  const [changeSelectOptions, setChangSelectOptions] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [complete, setIsComplete] = useState(false);

  function handleEditTask() {
    setOpenEdit(true);
    setOpen(false);
  }
  function handleCloseEditorTask() {
    setOpenEdit(false);
  }

  function handleSubmitTaskEdit(e) {
    e.preventDefault();
    edit(id, changeSelectOptions, changeInputEditorTask);
    setTimeout(() => {
      setOpenEdit(false);
    }, 2000);
  }

  function handleChangeInput(e) {
    setInputEditorTask(e.target.value);
  }

  function handleChangeSelectOptions(e) {
    setChangSelectOptions(e.target.value);
  }

  function handleDeleteTasks() {
    del(id);
    setOpen(false);
  }

  async function handleTaskComplete() {
    const option = "complete";
    setIsComplete(!complete);

    const request = await Axios.put(`/tasks/update/${id}/${option}`, {
      content: complete,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      (async function handleGetStatusTasks() {
        const { data } = await Axios.get("/tasks/read");
        data.map((tasks) => {
          tasks.Complete ? setCheckbox(true) : setCheckbox(false);
        });
      })();
    }, 5000);
  }, [complete]);

  return (
    <div className={module.task} onMouseLeave={() => setOpen(false)}>
      <span className={module.wrapper_types}>
        <span className={module.wrapper}>
          <TypeTask
            type={typeOne}
            color={colorOne}
            titleOne={typetitle}
            textColor="#000"
          />
          <TypeTask
            type={typeTwo}
            color={colorTwo}
            titleOne={typetitle}
            typetitle={typetitle}
            textColor="#fff"
          />
        </span>
        <BsThreeDotsVertical
          className={module.dot}
          onClick={() => setOpen((prev) => !prev)}
        />
        <div
          className={module.popup}
          style={
            open && title == title ? { display: "flex" } : { display: "none" }
          }
        >
          <span className={module.opt} onClick={handleEditTask}>
            <AiTwotoneEdit className={module.edit} />
            <p>edit</p>
          </span>
          <span className={module.opt} onClick={handleDeleteTasks}>
            <AiTwotoneDelete className={module.delete} />
            <p>delete</p>
          </span>
        </div>
      </span>
      <strong
        className={module.Title}
        style={
          checkbox
            ? { textDecoration: "line-through 1px #CACCCE", color: "#F85059" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </strong>
      <p
        className={module.content}
        style={
          checkbox
            ? { textDecoration: "line-through 1px #CACCCE", color: "#F85059" }
            : { textDecoration: "none" }
        }
      >
        {content}
      </p>

      <label
        className={module.check}
        aria-label="checkbox"
        onClick={handleTaskComplete}
      >
        <span
          className={module.checked}
          style={checkbox ? { color: "#E8FE94" } : { color: "#101213" }}
        >
          ✔
        </span>
      </label>

      <div
        className={module.task_editor}
        style={openEdit ? { display: "flex" } : { display: "none" }}
      >
        <AiOutlineCloseCircle
          className={module.close}
          onClick={handleCloseEditorTask}
        />
        <strong className={module.edittask}>edit task</strong>
        <form className={module.form} onSubmit={handleSubmitTaskEdit}>
          <input
            type="text"
            className={module.content}
            onChange={handleChangeInput}
          />
          <label for={module.opt}>select option:</label>

          <select
            name={module.opt}
            id={module.opt}
            onChange={handleChangeSelectOptions}
          >
            <option value="typetask">typetask</option>
            <option value="title">title</option>
            <option value="content">content</option>
            {/* <option value="complete">complete</option> */}
          </select>
          <span className={module.response}>{status}</span>
          <button className={module.save}>save</button>
        </form>
      </div>
    </div>
  );
};

export default Tasks;
