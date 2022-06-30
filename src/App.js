import { Routes , Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddBillModal from './component/Pages/AddBillModal';
import Home from './component/Pages/Home'

function App() {
  return (
    <div className="App">
      <AddBillModal></AddBillModal>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
