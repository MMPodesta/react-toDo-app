import './App.css';
import { Nav} from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { PrivateRoutes } from './components/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/profile" element={<Profile />}/>
          </Route>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
