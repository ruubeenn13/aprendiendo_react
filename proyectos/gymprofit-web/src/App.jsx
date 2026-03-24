import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>GymProFit - En construcción</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;