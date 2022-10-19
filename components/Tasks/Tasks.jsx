import TypeTask from "../TypeTask/TypeTask";
import module from "./Tasks.module.sass";
import { BsThreeDotsVertical } from "react-icons/bs";

const Tasks = () => {
  return (
    <div className={module.task}>
      <span className={module.wrapper_types}>
        <span className={module.wrapper}>
          <TypeTask type="App" color="greenyellow" />
          <TypeTask type="Website" color="skyblue" />
        </span>
        <BsThreeDotsVertical className={module.dot} />
      </span>
      <strong className={module.Title}>pages "about" and "carrers"</strong>
      <p className={module.content}>
        all the detais are in the file. i'm sure it will turn out cool!
      </p>
    </div>
  );
};

export default Tasks;
