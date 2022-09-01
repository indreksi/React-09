import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Meist from './pages/Meist';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <div className='App'>
      <button className='nupp'>nupp</button>
      <img
        className='pilt'
        src='https://f9.pmo.ee/yHthhOgHatE0ROXcT06ctI5q37w=/685x0/filters:focal(358x296:414x333)/nginx/o/2022/05/29/14585876t1h0839.jpg'
        alt=''
      />

      <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='/ostukorv'>
        <button>Ostukorv</button>
      </Link>
      <Link to='/meist'>
        <button>Meist</button>
      </Link>

      {/*path="" <-- mis järgneb localhost:3000-le, ehk siis avalehe domeenile  */}

      <Routes>
        <Route path='' element={<div>Olen kodulehel</div>} />
        <Route path='ostukorv' element={<Ostukorv />} />
        <Route path='meist' element={<Meist />} />
      </Routes>
    </div>
  );
}

export default App;
