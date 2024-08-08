import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './component/LandingPage';
import UserLogin from'../src/component/UserLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
