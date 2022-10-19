import module from "./Sidebar.module.sass";
import { TiThLargeOutline } from "react-icons/ti";
import { TbMessageShare } from "react-icons/tb";
import { IoSquareOutline } from "react-icons/io5";
import {
  IoIosNotificationsOutline,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { SlCheck } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { useState } from "react";

const Sidebar = ({ changeUserValue }) => {
  const [controlFavorite, setControlFavorite] = useState(false);
  const [controlAll, setControlAll] = useState(false);
  const [openTab, setOpenTab] = useState(true);

  return (
    <aside className={module.aside}>
      <div className={module.wrapper_icons}>
        <span
          className={module.span}
          onClick={() => setOpenTab((prev) => !prev)}
        >
          <TiThLargeOutline className={module.window} />
        </span>
        <span className={module.span}>
          <TbMessageShare className={module.message} />
        </span>
        <span className={module.span}>
          <IoSquareOutline className={module.square} />
        </span>
        <span className={module.span}>
          <SlCheck className={module.check} />
        </span>
        <span className={module.span}>
          <IoIosNotificationsOutline className={module.bell} />
        </span>
        <span className={module.span} onClick={changeUserValue}>
          <FiUsers className={module.users} />
        </span>
        <span className={module.span}>
          <BsGear className={module.gear} />
        </span>
      </div>
      <div
        className={module.wrapper_tables}
        style={openTab ? { display: "block" } : { display: "none" }}
      >
        <ul
          className={module.favorite}
          onClick={() => setControlFavorite((prev) => !prev)}
        >
          {controlFavorite ? (
            <IoIosArrowDown className={module.arrow_down} />
          ) : (
            <IoIosArrowUp className={module.arrow_up} />
          )}
          favorites
        </ul>
        <ul
          className={module.all_projects}
          onClick={() => setControlAll((prev) => !prev)}
        >
          {controlAll ? (
            <IoIosArrowDown className={module.arrow_down} />
          ) : (
            <IoIosArrowUp className={module.arrow_up} />
          )}
          all projects
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
