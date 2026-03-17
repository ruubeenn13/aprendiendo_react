import './Meteorologia.css'

const Meteorologia = ({ temperatura, radiacion }) => {
    return (
        <div className='meteorologia-wrapper'>
            <div className='meteorologia-container'>
                <div className='meteorologia-content'>
                    <h2 className='meteorologia-title'>Meteorología</h2>
                    <div className='meteo-row'>
                        <span className='meteo-label'>Temperatura:</span>
                        <span className='meteo-value'>{temperatura} ºC</span>
                    </div>

                    <div className='meteo-row'>
                        <span className='meteo-label'>Radiación directa:</span>
                        <span className='meteo-value'>{radiacion} W/m²</span>
                    </div>
                </div>

                <div className='meteorologia-icon'>
                    <span className='weather-icon'>⛅</span>
                </div>
            </div>
        </div>
    )
}

export default Meteorologia