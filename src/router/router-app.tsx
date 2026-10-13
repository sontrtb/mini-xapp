import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

function RouterApp() {
  return (
    <HashRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default RouterApp;