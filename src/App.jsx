// App.jsx (with page transitions)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css'; // For transition styles

function App() {
  return (
    <Router>
      <Navbar />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={window.location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
