import './App.css';
import Nabvar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <Nabvar/>
      <div className='body-container'>
      <Sidebar/>
      <Home/>

      </div>
    </div>
  );
}

export default App;
