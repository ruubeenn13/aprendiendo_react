const instalacion = {
  nombre: "La Balsa",
  meteorologia: {
    temperatura: 9.5,
    radiacion: 114,
  },
  datosInstalacion: [
    { label: "Tecnología:", valor: "FV Fija" },
    { label: "Año:", valor: "2005" },
    { label: "Ubicación:", valor: "Suelo" },
    { label: "Cód. IT:", valor: "IT-00027" },
    { label: "Potencia:", valor: "100 kWn | 120.4 kWp" },
  ],
  datosRetributivos: [
    { label: "Uf (umbral):", valor: "212 Heq" },
    { label: "Nh (mínimo):", valor: "424 Heq" },
    { label: "Heq máx.:", valor: "1.414 Heq" },
    { label: "Ri (€/MW/año):", valor: "59.893,60 €/año" },
    { label: "Ro:", valor: "43,76 €/MWh" },
  ],
  horasEquivalentes: [
    {
      periodo: "Año: 01 Enero – 08 Marzo",
      v2026: "239 Heq",
      v2025: "234 Heq",
      media: "252 Heq",
      estado: "Correcto",
    },
    {
      periodo: "Mes: 01 Marzo – 08 Marzo",
      v2026: "19 Heq",
      v2025: "11 Heq",
      media: "31 Heq",
      estado: "Incorrecto",
    },
  ],
  estadoFuncionamiento: [
    {
      fecha: "Día: 08 Marzo 2026",
      instalacion: "3 Heq",
      mediaInstalaciones: "2 Heq",
      mediaTooltip: "Media con 101 instalaciones",
      estado: "Correcto",
    },
  ],
}

export default instalacion