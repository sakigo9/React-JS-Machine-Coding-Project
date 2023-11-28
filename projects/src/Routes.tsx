import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDosApp from './containers/ToDosApp/ToDosApp';
import Home from './containers/Home/Home';
import ThemeSwitch from './containers/projects/ThemeSwitch/ThemeSwitch';
import ToDos from './containers/projects/ToDosPart2/ToDos';
const ProjectRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toDos" element={<ToDosApp />} />
        <Route path="/theme" element={<ThemeSwitch />} />
        <Route path="/toDos2" element={<ToDos />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
