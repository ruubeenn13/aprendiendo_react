import { useState } from 'react'
import { formatearValor } from '../utils/formatear'
import './Seccion.css'

const DatosInstalacion = ({ datos }) => {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="seccion-container">
      <div className="seccion-header" onClick={() => setAbierto(!abierto)}>
        <h2 className="seccion-titulo">Datos de la instalación</h2>
        <span className="seccion-toggle">{abierto ? '▲' : '▼'}</span>
      </div>
      {abierto && (
        <div className="seccion-body">
          {datos.map((item, index) => (
            <div key={index} className="dato-row">
              <span className="dato-label">{item.label}</span>
              <span className="dato-valor">{formatearValor(item.valor)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DatosInstalacion