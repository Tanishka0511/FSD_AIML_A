import { Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import Image from './components/Image';
import StopWatch from './components/StopWatch';
import RefEx from './components/RefEx';
import Parent from './components/Parent';
import ReducerEX from './components/ReducerEx';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Counter" element={<Counter/>} />
        <Route path="/Image" element={<Image/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/logout" element={<h1>Logout Page</h1>} />
        <Route path="/stopWatch" element={<StopWatch/>} />
        <Route path="/RefEx" element={<RefEx/>} />
        <Route path="/Parent" element={<Parent/>} />
        <Route path="/ReducerEx" element={<ReducerEX/>} />
        <Route path="*" element={<h1>No Page Available</h1>} />
      </Routes>
    </div>
  );
};

export default App;
