import './App.css'
import freeCodeCampLogo from './img/imagen_main.jpg'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='main-contenedor'>
        <img 
          className='imagen-main'
          src={freeCodeCampLogo}
          alt='Banner alargado'
        />
      </div>

      <div className='contenedor-principal'>
        <Counter numClics={numClics} />
        
        <Button
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
          
        <Button 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />  
      </div>
    </div>
  )
}

export default App
