import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import { ControllingUserTab } from "../context/ControllingUserTab.js";
import { useState } from "react";

const App = () => {
  const [controllTabUser, setControllTabUser] = useState(false);

  const changeUserValue = () => setControllTabUser(!controllTabUser);

  return (
    <ControllingUserTab.Provider value={controllTabUser}>
      {" "}
      <section>
        <Sidebar changeUserValue={changeUserValue} />
        <Header />
        <Main />
        <Profile changeUserValue={changeUserValue} />
      </section>
    </ControllingUserTab.Provider>
  );
};

export default App;
