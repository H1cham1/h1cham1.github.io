import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ervaringen from './pages/Ervaringen';
import Projecten from './pages/Projecten';
import Contact from './pages/Contact';
import Over from './pages/Over';
import ProjectDetail from './pages/ProjectDetail';

import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ervaringen" element={<Ervaringen />} />
        <Route path="/projecten" element={<Projecten />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/over" element={<Over />} />
        <Route path="/projecten/:slug" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main className="mainContent">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
