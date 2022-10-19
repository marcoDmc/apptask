import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
// import module from "../styles/App.module.sass";

const App = () => {
  return (
    <section>
      <Sidebar />
      <Header />
      <Main />
      <Profile />
    </section>
  );
};

export default App;
