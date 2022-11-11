import module from "./Main.module.sass";
import Tasks from "../Tasks/Tasks";
import NewTask from "../createTask/NewTask";
import { BsKanban, BsTable, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";
import { useEffect, useState } from "react";
import Axios from "../../api/api";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(false);
  const [messageStatus, setMessageStatus] = useState("waiting...⏳");
  const handleCreateNewTask = () => setNewTask((prev) => !prev);

  async function handleGetTasks() {
    const request = await Axios.get("/tasks/read");
    const { data } = await request;
    localStorage.setItem("tasks", JSON.stringify(data));
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }

  async function handleCreateTask(identity, TypeTask, Title, Content) {
    const newTask = {
      identity,
      TypeTask,
      Title,
      Content,
    };

    if (identity && TypeTask && Title && Content) {
      const request = await Axios.post("/tasks/create", newTask);
      const { data } = request;
      handleGetTasks();
      setNewTask(false);
      return data;
    } else {
      return;
    }
  }

  async function handleDeleteTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks == "") {
      return;
    } else {
      const request = await Axios.delete(`/tasks/delete/${id}`);
      const { data } = await request;
      handleGetTasks();
      return data;
    }
  }

  async function handleUpdateTask(id, option, content) {
    const taskUpdate = {
      content,
    };
    if (id && option && content) {
      const request = await Axios.put(
        `/tasks/update/${id}/${option}`,
        taskUpdate
      );
      const { data } = request;
      handleGetTasks();
      setMessageStatus("sucessfully ✔");
      return data;
    } else {
      setMessageStatus("failed ❗");
      return;
    }
  }

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <>
      <main className={module.main}>
        <div className={module.options}>
          <span className={module.tab}>
            <span className={module.tables}>
              <BsKanban className={module.kanban} />
              <p className={module.text}>kanban</p>
            </span>
            <span className={module.tables}>
              <BsTable className={module.table} />
              <p className={module.text}>table</p>
            </span>
            <span className={module.tables}>
              <AiOutlineOrderedList className={module.list} />
              <p className={module.text}>list view</p>
            </span>
          </span>
          <span className={module.newtasks}>
            <div className={module.createtask}>
              <p>
                new request
                <BsThreeDotsVertical className={module.dot} />
              </p>
              <span onClick={handleCreateNewTask}>
                <CgMathPlus />
              </span>
            </div>
            <div className={module.createtask}>
              <p>
                in complete
                <BsThreeDotsVertical className={module.dot} />
              </p>
              <span onClick={handleCreateNewTask}>
                <CgMathPlus />
              </span>
            </div>
            <div className={module.createtask}>
              <p>
                complete
                <BsThreeDotsVertical className={module.dot} />
              </p>
              <span onClick={handleCreateNewTask}>
                <CgMathPlus />
              </span>
            </div>
          </span>
        </div>
        <div className={module.wrapper_task}>
          {tasks.map((obj) => (
            // eslint-disable-next-line react/jsx-key
            <Tasks
              key={obj._id}
              typeOne={obj.TypeTask}
              typeTwo={obj.TypeTask}
              colorOne="#B4D6FF"
              colorTwo="#000"
              typetitle={obj.TypeTask}
              title={obj.Title}
              content={obj.Content}
              edit={handleUpdateTask}
              del={handleDeleteTask}
              id={obj._id}
              status={messageStatus}
            />
          ))}
        </div>
      </main>
      <NewTask
        handleCreateNewTask={handleCreateNewTask}
        newTask={newTask}
        create={handleCreateTask}
      />
    </>
  );
};

export default Main;
