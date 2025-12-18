import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BackgroundGradient from './components/BackgroundGradient';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-slate-50 dark:bg-transparent min-h-screen text-slate-900 dark:text-text-primary selection:bg-accent-purple selection:text-white font-sans overflow-x-hidden relative cursor-none transition-colors duration-300">
          <Cursor />
          <Preloader />
          <BackgroundGradient />
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
