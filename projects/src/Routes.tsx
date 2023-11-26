import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDosApp from './containers/ToDosApp/ToDosApp';
import Home from './containers/Home/Home';
import ThemeSwitch from './containers/projects/ThemeSwitch/ThemeSwitch';
const ProjectRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toDos" element={<ToDosApp />} />
        <Route path="/theme" element={<ThemeSwitch />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
