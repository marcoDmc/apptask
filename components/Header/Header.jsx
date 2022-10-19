import { FiSearch } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { IoSquareOutline } from "react-icons/io5";
import module from "./Header.module.sass";


const Header = () => {
  return (
    <header className={module.header}>
      <span className={module.wrapper}>
        <span className={module.wrapper_title}>
          <IoSquareOutline className={module.square} />
          <h1 className={module.title}>task</h1>
        </span>
        <span className={module.wrapper_icons}>
          <FiSearch className={module.search} />
          <AiOutlineStar className={module.star} />
          <BsThreeDotsVertical className={module.dots} />
        </span>
      </span>
      <span className={module.wrapper_options}>
        <li className={module.discussion}>discussion</li>
        <li className={module.tasks}>tasks</li>
        <li className={module.timeline}>timeline</li>
        <li className={module.files}>files</li>
        <li className={module.overview}>overview</li>
        <CgMathPlus className={module.plus} />
      </span>
    </header>
  );
};

export default Header;
