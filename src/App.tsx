import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "x-app-ui/x-app-ui.css"

// Pages
import Home from './pages/Home';
import ButtonDemo from './pages/ButtonDemo';
import XInputDemo from './pages/InputDemo';
import BottomSheetDemo from './pages/BottomSheetDemo';
import ModalDemo from './pages/ModalDemo';
import XCheckBoxDemo from './pages/CheckBoxDemo';
import XRadioDemo from './pages/RadioDemo';
import DatePickerDemo from './pages/DatePickerDemo';
import BottomTabDemo from './pages/BottomTabDemo';
import SwitchDemo from './pages/SwitchDemo';
import SliderDemo from './pages/SliderDemo';

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <div className="container header-container">
            <div className="logo">
              <Link to="/">
                <h1>XAppUI</h1>
              </Link>
            </div>
            <nav className="main-nav">
              <ul>
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/buttons">Buttons</Link></li>
                <li><Link to="/inputs">Inputs</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buttons" element={<ButtonDemo />} />
              <Route path="/inputs" element={<XInputDemo />} />
              <Route path="/bottom-sheet" element={<BottomSheetDemo />} />
              <Route path="/modal" element={<ModalDemo />} />
              <Route path="/check-box" element={<XCheckBoxDemo />} />
              <Route path="/radio" element={<XRadioDemo />} />
              <Route path="/date-picker" element={<DatePickerDemo />} />
              <Route path="/bottom-tab" element={<BottomTabDemo />} />
              <Route path="/switch" element={<SwitchDemo />} />
              <Route path="/slider" element={<SliderDemo />} />
            </Routes>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 XAppUI</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
