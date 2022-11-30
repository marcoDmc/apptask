import module from "./Sidebar.module.sass";

import { FiUser } from "react-icons/fi";
import { BsGear } from "react-icons/bs";

const Sidebar = ({ changeUserValue }) => {
  return (
    <aside className={module.aside}>
      <div className={module.wrapper_icons}>
        <span className={module.span} onClick={changeUserValue}>
          <FiUser className={module.user} title="profile" />
        </span>
        <span className={module.span}>
          <BsGear className={module.gear} title="configurations" />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
