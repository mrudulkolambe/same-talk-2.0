import './App.css';
import Intro from './pages/Intro';
import SignUp from './pages/SignUp';
import SplashComponent from './pages/SplashComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nickname from './pages/Nickname';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashComponent />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/nickname" element={<Nickname />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
