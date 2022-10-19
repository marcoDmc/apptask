import module from "./Sidebar.module.sass";
import { TiThLargeOutline } from "react-icons/ti";
import { TbMessageShare } from "react-icons/tb";
import { IoSquareOutline } from "react-icons/io5";
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { SlCheck } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { BsGear } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className={module.aside}>
      <div className={module.wrapper_icons}>
        {/* <div className={module.letter_c}>c</div> */}
        <span className={module.span}>
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
        <span className={module.span}>
          <FiUsers className={module.users} />
        </span>
        <span className={module.span}>
          <BsGear className={module.gear} />
        </span>
      </div>
      <div className={module.wrapper_tables}>
        <ul className={module.favorite}>
          <IoIosArrowDown className={module.arrow_down} />
          favorites
        </ul>
        <ul className={module.all_projects}>
          <IoIosArrowDown className={module.arrow_down} />
          all projects
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
