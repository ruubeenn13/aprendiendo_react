import instalacion from '../data/instalacion'
import Meteorologia from './Meteorologia'
import DatosInstalacion from './DatosInstalacion'
import DatosRetributivos from './DatosRetributivos'
import HorasEquivalentes from './HorasEquivalentes'
import EstadoFuncionamiento from './EstadoFuncionamiento'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <span className="header-bar"></span>
        <h1 className="installation-name">{instalacion.nombre}</h1>
      </div>
      <div className="dashboard-content">
        <Meteorologia
          temperatura={instalacion.meteorologia.temperatura}
          radiacion={instalacion.meteorologia.radiacion}
        />
        <div className="seccion-wrapper">
          <DatosInstalacion datos={instalacion.datosInstalacion} />
        </div>
        <div className="seccion-wrapper">
          <DatosRetributivos datos={instalacion.datosRetributivos} />
        </div>
        <div className="tabla-wrapper">
          <HorasEquivalentes filas={instalacion.horasEquivalentes} />
        </div>
        <div className="tabla-wrapper">
          <EstadoFuncionamiento filas={instalacion.estadoFuncionamiento} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard