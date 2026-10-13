import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import config from '../../config.json';

function RouterApp() {
  return (
    <Router basename={config.prePath}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouterApp;