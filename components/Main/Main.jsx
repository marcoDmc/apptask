import Tasks from "../Tasks/Tasks";
import module from "./Main.module.sass";
import { BsKanban, BsTable, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";
const Main = () => {
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
          {/*  */}
          <div className={module.createtask}>
            <p>
              new request
              <BsThreeDotsVertical className={module.dot} />
            </p>
            <span>
              <CgMathPlus />
            </span>
          </div>
          <div className={module.createtask}>
            {" "}
            <p>
              in complete
              <BsThreeDotsVertical className={module.dot} />
            </p>
            <span>
              <CgMathPlus />
            </span>
          </div>
          <div className={module.createtask}>
            {" "}
            <p>
              complete
              <BsThreeDotsVertical className={module.dot} />
            </p>
            <span>
              <CgMathPlus />
            </span>
          </div>
        </span>
      </div>
      <div className={module.wrapper_task}>
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </main>
  );
};

export default Main;
