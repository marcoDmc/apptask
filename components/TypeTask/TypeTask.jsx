import module from "./TypeTask.module.sass";

const TypeTask = ({ type, color, textColor, typetitle }) => {
  return (
    <span
      className={module.typetask}
      style={{ backgroundColor: color, color: textColor }}
      title={typetitle}
    >
      {type}
    </span>
  );
};

export default TypeTask;
