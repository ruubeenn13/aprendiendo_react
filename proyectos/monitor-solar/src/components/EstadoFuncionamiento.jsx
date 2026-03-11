import { useState } from 'react'
import { formatearValor } from '../utils/formatear'
import './Tabla.css'

const EstadoBadge = ({ estado }) => {
  const [hover, setHover] = useState(false)
  const clase = estado === 'Correcto' ? 'badge-correcto' : 'badge-incorrecto'

  return (
    <span
      className={`badge ${clase} badge-wrapper`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      ● {estado}
      {hover && (
        <div className="criterio-tooltip">
          <div className="criterio-titulo">Criterio</div>
          <div className="criterio-item"><span className="dot verde"></span> : [-10 %, +=]</div>
          <div className="criterio-item"><span className="dot naranja"></span> : (-30 %, -10 %)</div>
          <div className="criterio-item"><span className="dot rojo"></span> : (=, -30 %]</div>
        </div>
      )}
    </span>
  )
}

const EstadoFuncionamiento = ({ filas }) => {
  const [mostrarTooltipMedia, setMostrarTooltipMedia] = useState(false)

  return (
    <div className="tabla-seccion">
      <h3 className="tabla-titulo">
        Estado de funcionamiento (pot. nominal)
        <span
          className="info-icon-titulo"
          onMouseEnter={() => setMostrarTooltipMedia(true)}
          onMouseLeave={() => setMostrarTooltipMedia(false)}
        >
          ⓘ
          {mostrarTooltipMedia && (
            <div className="media-tooltip">{filas[0].mediaTooltip}</div>
          )}
        </span>
      </h3>
      <table className="tabla">
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '35%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>
        <thead>
          <tr className="tabla-head">
            <th>Fecha</th>
            <th>Instalación</th>
            <th>Media instalaciones</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => {
            const partes = fila.fecha.split(': ')
            return (
              <tr key={i} className="tabla-fila">
                <td>
                  <span className="periodo-prefix">{partes[0]}: </span>
                  {partes[1]}
                </td>
                <td>{formatearValor(fila.instalacion)}</td>
                <td className="td-separado">{formatearValor(fila.mediaInstalaciones)}</td>
                <td><EstadoBadge estado={fila.estado} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EstadoFuncionamiento