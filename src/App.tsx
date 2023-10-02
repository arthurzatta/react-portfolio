import { IconContext } from "react-icons";
import Divider from "./components/Divider";
import Navbar from "./components/Navbar";
import About from "./containers/About";
import Education from "./containers/Education";
import Idioms from "./containers/Idioms";
import Jobs from "./containers/Jobs";
import Projects from "./containers/Projects";
import Sidebar from "./containers/Sidebar";

function App() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div>
        <Navbar />
        <div className="grid grid-cols-12 bg-black w-ful h-full py-[3.2rem]">
          <div className="col-span-12 md:col-span-3 md:col-start-1 lg:col-span-3 lg:col-start-1">
            <Sidebar />
          </div>
          <div className="col-span-12 lg:col-span-7 px-5 md:col-start-4">
            <About />
            <Divider />
            <Jobs />
            <Divider />
            <Projects />
            <Divider />
            <Education />
            <Divider />
            <Idioms />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
