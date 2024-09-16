import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./mainPage";
import Login from "./login";
import Signup from "./signup";
import CreateCoursePage from './CreateCoursePage'
import Courses from "./Courses";
import CreateCourseMaterial from "./CreateCourseMaterial";
import ShowMaterial from "./ShowMaterial";
import NavigatorLeft from "./NavigatorLeft";

function App() {
  return (
    <Router>
      <div>
      <NavigatorLeft />
        {/* <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createcourse" element={< CreateCoursePage />} />
          <Route path='/course' element={<Courses/>}/>
          <Route path='/addmaterial' element={<CreateCourseMaterial/>}/>
          <Route path='/showmaterial' element={<ShowMaterial/>}/>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
