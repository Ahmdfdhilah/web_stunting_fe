import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import ChildRegistrationPage from './pages/ChildRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/child" element={<ChildRegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
