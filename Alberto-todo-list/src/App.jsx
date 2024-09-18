import './App.css';

import Header from './components/Header.jsx'
import TodoList from './components/Container.jsx';

function App() {
  return (
    <div className='App'>
      <div><Header/></div>
      <div><TodoList/></div>
    </div>

  );
}

export default App
