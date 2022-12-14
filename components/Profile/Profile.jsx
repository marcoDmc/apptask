/* eslint-disable jsx-a11y/alt-text */
import module from "./Profile.module.sass";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext } from "react";
import { ControllingUserTab } from "../../context/ControllingUserTab.js";

const Profile = ({ changeUserValue }) => {
  const controllTab = useContext(ControllingUserTab);
  return (
    <div
      className={module.container}
      style={controllTab ? { display: "grid" } : { display: "none" }}
    >
      <span className={module.wapper_icons}>
        <AiOutlineCloseCircle
          className={module.close}
          onClick={changeUserValue}
        />

        <BsThreeDotsVertical className={module.dot} />
      </span>
      <picture>
        <img
          src="https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI="
          className={module.perfil}
        />
      </picture>
      <strong className={module.name}>mira brown</strong>
      <small className={module.user_name}>@mira.b</small>
      <p className={module.bio}>
        visual design, product design, research, typography & colors lover.
      </p>
      <span className={module.wrapper_functions}>
        <span className={module.type}>UX/UI designer</span>
        <span className={module.type}>dribbbler</span>
      </span>
    </div>
  );
};

export default Profile;
