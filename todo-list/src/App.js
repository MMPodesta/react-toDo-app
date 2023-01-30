import './App.css';
import { Greeting } from './components/Greeting'; 
import { Nav} from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Greeting name="User"/>
    </div>
  );
}

export default App;
