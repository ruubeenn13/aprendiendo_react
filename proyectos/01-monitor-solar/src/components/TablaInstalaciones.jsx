import { useState } from 'react'
import instalacion from '../data/instalacion'
import './TablaInstalaciones.css'

const colores = {
  correcto:   { bg: '#4caf50', glow: 'rgba(76, 175, 80, 0.8)'  },
  warning:    { bg: '#ff9800', glow: 'rgba(255, 152, 0, 0.8)'  },
  incorrecto: { bg: '#f44336', glow: 'rgba(244, 67, 54, 0.8)'  },
}

const Queso = ({ semanas }) => {
  const c = semanas.map(s => colores[s.estado].bg)
  return (
    <svg className="queso" width="26" height="26" viewBox="0 0 26 26">
      <clipPath id="circulo">
        <circle cx="13" cy="13" r="12" />
      </clipPath>
      <g clipPath="url(#circulo)">
        <polygon points="13,13 13,1 25,1 25,13"  fill={c[0]} />
        <polygon points="13,13 25,13 25,25 13,25" fill={c[1]} />
        <polygon points="13,13 13,25 1,25 1,13"  fill={c[2]} />
        <polygon points="13,13 1,13 1,1 13,1"    fill={c[3]} />
      </g>
      <line x1="13" y1="1"  x2="13" y2="25" stroke="white" strokeWidth="1.5" />
      <line x1="1"  y1="13" x2="25" y2="13" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

const TablaInstalaciones = () => {
  const [tooltipNombre, setTooltipNombre] = useState(null)
  const [tooltipQueso, setTooltipQueso] = useState(null)
  const [tooltipDias, setTooltipDias] = useState(null)

  const circulo = (estado) => (
    <span className="circulo" style={{
      backgroundColor: colores[estado].bg,
      boxShadow: `0 0 6px 3px ${colores[estado].glow}`
    }}></span>
  )

  return (
    <div className="tabla-wrapper">
      <table className="tabla">
        <thead>
          <tr>
            <th>Instalación</th>
            <th>Fecha</th>
            <th>Año H<sub>eq</sub> inst.</th>
            <th>Año H<sub>eq</sub> media</th>
            <th>Estado año</th>
            <th>Mes H<sub>eq</sub> inst.</th>
            <th>Mes H<sub>eq</sub> media</th>
            <th>Estado mes</th>
            <th>Sem. H<sub>eq</sub> inst.</th>
            <th>Sem. H<sub>eq</sub> media</th>
            <th>Estado sem.</th>
            <th>Días</th>
          </tr>
        </thead>
        <tbody>
          {instalacion.instalaciones.map((inst) => (
            <tr key={inst.id}>

              <td>
                <div className="celda-tooltip"
                  onMouseEnter={() => setTooltipNombre(inst.id)}
                  onMouseLeave={() => setTooltipNombre(null)}
                >
                  <span className="nombre-link">{inst.nombre}</span>
                  {tooltipNombre === inst.id && (
                    <div className="tooltip tooltip-nombre">
                      <p className="tooltip-titulo">Datos de {inst.nombre}</p>
                      <p><span>Tecnología:</span><span>{inst.datosInstalacion.tecnologia}</span></p>
                      <p><span>Año:</span><span>{inst.datosInstalacion.anio}</span></p>
                      <p><span>Ubicación:</span><span>{inst.datosInstalacion.ubicacion}</span></p>
                      <p><span>Cód. IT:</span><span>{inst.datosInstalacion.codIT}</span></p>
                      <p><span>Potencia:</span><span>{inst.datosInstalacion.potencia}</span></p>
                    </div>
                  )}
                </div>
              </td>

              <td>{inst.fecha}</td>
              <td>{inst.anio.heqInstalacion}</td>
              <td>{inst.anio.heqMedia}</td>
              <td>{circulo(inst.anio.estado)}</td>

              <td>{inst.mes.heqInstalacion}</td>
              <td>{inst.mes.heqMedia}</td>

              <td>
                <div className="celda-tooltip"
                  onMouseEnter={() => setTooltipQueso(inst.id)}
                  onMouseLeave={() => setTooltipQueso(null)}
                >
                  <Queso semanas={inst.mes.semanas} />
                  {tooltipQueso === inst.id && (
                    <div className="tooltip">
                      <table className="tooltip-tabla">
                        <thead>
                          <tr>
                            <th>Semana</th>
                            <th>H<sub>eq</sub> inst.</th>
                            <th>H<sub>eq</sub> media</th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inst.mes.semanas.map((s, i) => (
                            <tr key={i}>
                              <td>{s.rango}</td>
                              <td><strong>{s.heqInst}</strong></td>
                              <td><strong>{s.heqMedia}</strong></td>
                              <td>{circulo(s.estado)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </td>

              <td><strong>{inst.semana.heqInstalacion}</strong></td>
              <td><strong>{inst.semana.heqMedia}</strong></td>
              <td>{circulo(inst.semana.estado)}</td>

              <td>
                <div className="celda-tooltip"
                  onMouseEnter={() => setTooltipDias(inst.id)}
                  onMouseLeave={() => setTooltipDias(null)}
                >
                  <div className="dias-circulos">
                    {inst.semana.dias.map((d, i) => (
                      <span key={i} className="dia-letra"
                        style={{ backgroundColor: colores[d.estado].bg, boxShadow: `0 0 6px 3px ${colores[d.estado].glow}` }}
                      >
                        {d.dia}
                      </span>
                    ))}
                  </div>
                  {tooltipDias === inst.id && (
                    <div className="tooltip tooltip-derecha">
                      <table className="tooltip-tabla">
                        <thead>
                          <tr>
                            <th>Día</th>
                            <th>H<sub>eq</sub> inst.</th>
                            <th>H<sub>eq</sub> media</th>
                            <th>Estado</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inst.semana.dias.map((d, i) => (
                            <tr key={i}>
                              <td>{d.dia}</td>
                              <td><strong>{d.heqInst}</strong></td>
                              <td><strong>{d.heqMedia}</strong></td>
                              <td>{circulo(d.estado)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaInstalaciones