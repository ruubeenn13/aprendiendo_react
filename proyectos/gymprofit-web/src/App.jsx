import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';

const Placeholder = ({ name }) => (
  <div style={{ paddingTop: '2rem' }}>
    <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '3rem' }}>{name}</h1>
    <p style={{ opacity: 0.5, marginTop: '0.5rem' }}>En construcción...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Placeholder name="DASHBOARD" /></Layout>} />
        <Route path="/rutinas" element={<Layout><Placeholder name="RUTINAS" /></Layout>} />
        <Route path="/ejercicios" element={<Layout><Placeholder name="EJERCICIOS" /></Layout>} />
        <Route path="/nutricion" element={<Layout><Placeholder name="NUTRICIÓN" /></Layout>} />
        <Route path="/progreso" element={<Layout><Placeholder name="PROGRESO" /></Layout>} />
        <Route path="/perfil" element={<Layout><Placeholder name="PERFIL" /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;