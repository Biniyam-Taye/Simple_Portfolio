import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import HirePage from './pages/HirePage';
import BlogPage from './pages/BlogPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import UsesPage from './pages/UsesPage';

// Helper to scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className="relative min-h-screen bg-dot-pattern font-sans flex flex-col justify-between transition-colors selection:bg-teal-500 selection:text-white"
        style={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)',
        }}
      >
        
        {/* Floating Top Navbar with ppimage, navigation links, and dark mode toggle */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/hire" element={<HirePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/uses" element={<UsesPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Sleek Minimalist Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
