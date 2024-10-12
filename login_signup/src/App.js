import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signupp from './components/Signupp';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="/signuppp" element={<Signupp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
