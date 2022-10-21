/* eslint-disable react/no-unescaped-entities */
import TypeTask from "../TypeTask/TypeTask";
import module from "./Tasks.module.sass";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { useState } from "react";

const Tasks = ({
  typeOne,
  typeTwo,
  colorOne,
  colorTwo,
  typetitle,
  title,
  content,
}) => {
  const [open, setOpen] = useState(false);

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
          <span className={module.opt}>
            <AiTwotoneEdit className={module.edit} />
            <p>edit</p>
          </span>
          <span className={module.opt}>
            <AiTwotoneDelete className={module.delete} />
            <p>delete</p>
          </span>
        </div>
      </span>
      <strong className={module.Title}>{title}</strong>
      <p className={module.content}>{content}</p>
    </div>
  );
};

export default Tasks;
