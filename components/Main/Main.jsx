/* eslint-disable react-hooks/exhaustive-deps */
import module from "./Main.module.sass";
import Tasks from "../Tasks/Tasks";
import NewTask from "../createTask/NewTask";
import { CgMathPlus } from "react-icons/cg";
import { useEffect, useState } from "react";
import Axios from "../../api/api";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(false);
  const Complete = false;
  const [messageStatus, setMessageStatus] = useState("waiting...⏳");
  const [isComplete, setIsComplete] = useState(false);

  const handleCreateNewTask = () => setNewTask((prev) => !prev);

  async function handleCreateTask(identity, TypeTask, Title, Content) {
    const newTask = {
      identity,
      TypeTask,
      Title,
      Content,
      Complete,
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

  async function handleFilterIncompleteCompleteTasks() {
    const { data } = await Axios.get("/tasks/read");

    if (isComplete) {
      const complete = data.filter((task) => task.Complete === true);
      setTimeout(() => {
        localStorage.setItem("tasks", JSON.stringify(complete));
        setTasks(JSON.parse(localStorage.getItem("tasks")));
      }, 2000);
      console.log(complete);
    } else {
      const incomplete = data.filter((task) => !task.Complete === true);
      setTimeout(() => {
        localStorage.setItem("tasks", JSON.stringify(incomplete));
        setTasks(JSON.parse(localStorage.getItem("tasks")));
      }, 2000);
      console.log(incomplete);
    }
  }

  function handleTasksComplete(e) {
    setIsComplete(true);
  }

  function handleTaskIncomplete() {
    setIsComplete(false);
  }

  useEffect(() => {
    handleFilterIncompleteCompleteTasks();
  }, [isComplete]);

  return (
    <>
      <main className={module.main}>
        <div className={module.options}>
          <span className={module.tab}></span>
          <span className={module.newtasks}>
            <div className={module.createtask}>
              <p>new task</p>
              <span onClick={handleCreateNewTask}>
                <CgMathPlus />
              </span>
            </div>
            <div className={module.createtask} onClick={handleTaskIncomplete}>
              <p
                className={module.incomplete}
                style={
                  isComplete
                    ? { backgroundColor: "initial" }
                    : { backgroundColor: "#F85059" }
                }
              >
                in complete
              </p>
            </div>
            <div className={module.createtask}>
              <p
                className={module.complete}
                onClick={handleTasksComplete}
                style={
                  isComplete
                    ? { backgroundColor: "#3EC33B" }
                    : { backgroundColor: "initial" }
                }
              >
                complete
              </p>
            </div>
          </span>
        </div>
        <div className={module.wrapper_task}>
          {tasks.length > 0 ? (
            tasks.map((obj) => (
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
            ))
          ) : (
            <strong className={module.empty}>no tasks , it is empty</strong>
          )}
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
