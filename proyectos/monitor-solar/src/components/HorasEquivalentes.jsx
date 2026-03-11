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

const HorasEquivalentes = ({ filas }) => {
  return (
    <div className="tabla-seccion">
      <h3 className="tabla-titulo">Horas equivalentes (pot. nominal)</h3>
      <table className="tabla">
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>
        <thead>
          <tr className="tabla-head">
            <th>Período</th>
            <th>2026</th>
            <th>2025</th>
            <th>Media 2022–2025</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => {
            const partes = fila.periodo.split(': ')
            return (
              <tr key={i} className="tabla-fila">
                <td>
                  <span className="periodo-prefix">{partes[0]}: </span>
                  {partes[1]}
                </td>
                <td>{formatearValor(fila.v2026)}</td>
                <td>{formatearValor(fila.v2025)}</td>
                <td>{formatearValor(fila.media)}</td>
                <td><EstadoBadge estado={fila.estado} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HorasEquivalentes