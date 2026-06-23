import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioHomePage } from './pages/PortfolioHomePage';
import { ProjectCasePage } from './pages/ProjectCasePage';

function getBasename() {
  return window.location.pathname.startsWith('/miricanvas-junior-pm-portfolio')
    ? '/miricanvas-junior-pm-portfolio'
    : '/';
}

export default function PortfolioApp() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<PortfolioHomePage />} />
        <Route path="/projects/:slug" element={<ProjectCasePage />} />
        <Route path="/work" element={<Navigate to={{ pathname: '/', hash: '#work' }} replace />} />
        <Route path="/about" element={<Navigate to={{ pathname: '/', hash: '#about' }} replace />} />
        <Route path="/contact" element={<Navigate to={{ pathname: '/', hash: '#contact' }} replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
