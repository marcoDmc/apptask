import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import { ControllingUserTab } from "../context/ControllingUserTab.js";
import { useState } from "react";
import NewTask from "../components/createTask/NewTask";

const App = () => {
  const [controllTabUser, setControllTabUser] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const changeUserValue = () => setControllTabUser(!controllTabUser);

  const handleCreateNewTask = () => setNewTask(!newTask);

  return (
    <ControllingUserTab.Provider value={controllTabUser}>
      <>
        <section>
          <NewTask
            newTask={newTask}
            handleCreateNewTask={handleCreateNewTask}
          />
          <Sidebar changeUserValue={changeUserValue} />
          <Header />
          <Main handleCreateNewTask={handleCreateNewTask} />
          <Profile changeUserValue={changeUserValue} />
        </section>
      </>
    </ControllingUserTab.Provider>
  );
};

export default App;
