import { FiSearch } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
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
          <span className={module.wrapper_search}></span>
          <FiSearch
            className={module.search}
            onClick={() => setControllSearch((prev) => !prev)}
          />
          <AiOutlineStar className={module.star} />
          <BsThreeDotsVertical className={module.dots} />
        </span>
      </span>
    </header>
  );
};

export default Header;
