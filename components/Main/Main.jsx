import Tasks from "../Tasks/Tasks";
import module from "./Main.module.sass";
import { BsKanban, BsTable, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";

import tasks from "../../mock/exampleTasks.json";

const Main = ({ handleCreateNewTask }) => {
  return (
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
        {/* iterating over locally saved sample data file - mock */}
        {tasks.map((task) => (
          <Tasks
            key={task.title}
            typeOne={task.typeOne}
            typeTwo={task.typeTwo}
            typetitle={task.typeTwo}
            colorOne={task.colorOne}
            colorTwo={task.colorTwo}
            title={task.title}
            content={task.content}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
