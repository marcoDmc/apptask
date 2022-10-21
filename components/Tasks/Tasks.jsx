/* eslint-disable react/no-unescaped-entities */
import TypeTask from "../TypeTask/TypeTask";
import module from "./Tasks.module.sass";
import { BsThreeDotsVertical } from "react-icons/bs";

const Tasks = ({
  typeOne,
  typeTwo,
  colorOne,
  colorTwo,
  typetitle,
  title,
  content,
}) => {
  return (
    <div className={module.task}>
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
        <BsThreeDotsVertical className={module.dot} />
      </span>
      <strong className={module.Title}>{title}</strong>
      <p className={module.content}>{content}</p>
    </div>
  );
};

export default Tasks;
