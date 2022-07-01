import { Routes , Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './component/Authentication/Login';
import Registration from './component/Authentication/Registration';
import Header from './component/Pages/Header';
import Home from './component/Pages/Home'

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Registration />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
