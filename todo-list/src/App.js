import './App.css';
import { Nav} from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
