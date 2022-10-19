import module from "./TypeTask.module.sass";

const TypeTask = ({ type, color }) => {
  return (
    <span className={module.typetask} style={{ backgroundColor: color }}>
      {type}
    </span>
  );
};

export default TypeTask;
