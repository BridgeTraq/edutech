// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Home from './pages/home'
import Courses from './pages/courses'
import Bookmarks from './pages/bookmarks';
import BestPractices from './pages/best-practices';
import Community from './pages/community';
import Certifications from './pages/certifications';
import Events from './pages/events';
import HelpCenter from './pages/help-center';
import Resources from './pages/resources';
import Tutorials from './pages/tutorials';
import Settings from './pages/settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
