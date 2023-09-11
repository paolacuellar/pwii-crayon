import './index2.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from './pages/Inicio';
import Registro from './pages/Registro';
import EditarPerfil from './pages/EditarPerfil';
import EditarHojaDeComisiones from './pages/EditarHojaDeComisiones';
import Pagos from './pages/Pagos';
import AgregarHojaDeComision from './pages/AgregarHojaDeComision';

import Header from './components/common/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/editar-perfil" element={<EditarPerfil />} />
          <Route path="/editar-hoja" element={<EditarHojaDeComisiones />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/agregar-hoja" element={<AgregarHojaDeComision />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;