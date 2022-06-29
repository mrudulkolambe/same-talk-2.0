import './App.css';
import Intro from './pages/Intro';
import SignUp from './pages/SignUp';
import SplashComponent from './pages/SplashComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nickname from './pages/Nickname';
import Onboarding from './pages/Onboarding';
import Filter from './pages/Filter';
import Language from './pages/Language';
import Personalizing from './pages/Personalizing';
import Homepage from './pages/Homepage';

function App() {
  const filters = ['Depression', 'Anxiety', 'Addiction', 'Advice', 'ADHD', 'Career', 'Loneliness', 'Fear', 'Confidence', 'Relationship', 'Stress', 'Positivity', 'Overthinking', 'Communication', 'Stammering', 'Suicide']
	const language = ['English', 'Hindi', 'Gujrati', 'Marathi', 'Urdu', 'Telugu', 'Tamil', 'Kannada', 'Malyalam']

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashComponent />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/nickname" element={<Nickname />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/questions" element={<Filter filters={filters}/>} />
          <Route path="/language" element={<Language language={language}/>} />
          <Route path="/personalizing" element={<Personalizing />} />
          <Route path="/home" element={<Homepage filters={filters}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
