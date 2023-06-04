import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDosApp from "./containers/ToDosApp/ToDosApp";
import Home from "./containers/Home/Home";
const ProjectRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toDos" element={<ToDosApp />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
