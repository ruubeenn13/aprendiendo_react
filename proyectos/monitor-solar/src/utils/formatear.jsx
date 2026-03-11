export const formatearValor = (texto) => {
  if (!texto) return texto
  return texto
    .replace(/Heq/g, 'H_eq')
    .split(/(H_eq|kWp|kWn)/g)
    .map((parte, i) => {
      if (parte === 'H_eq') return <span key={i}>H<sub>eq</sub></span>
      if (parte === 'kWp') return <span key={i}>kW<sub>p</sub></span>
      if (parte === 'kWn') return <span key={i}>kW<sub>n</sub></span>
      return parte
    })
}