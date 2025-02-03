import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/Pages/HomePage';
import ResumePage from './Components/Pages/ResumePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/resume' element={<ResumePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
