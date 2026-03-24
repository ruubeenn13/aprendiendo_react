const instalacion = {
  nombre: "La Balsa",
  meteorologia: {
    temperatura: 9.5,
    radiacion: 114,
  },
  instalaciones: [
    {
      id: 1,
      nombre: "BALSA - 1",
      fecha: "23 Marzo 2026",
      datosInstalacion: {
        tecnologia: "FV Fija",
        anio: 2005,
        ubicacion: "Suelo",
        codIT: "IT-00027",
        potencia: "100 kWn | 120.4 kWp",
      },
      anio: {
        heqInstalacion: 302,
        heqMedia: 315,
        estado: "correcto",
      },
      mes: {
        heqInstalacion: 82,
        heqMedia: 94,
        estado: "warning",
        semanas: [
          {
            rango: "23-03 / 23-03",
            heqInst: 5,
            heqMedia: 4,
            estado: "correcto",
          },
          {
            rango: "16-03 / 22-03",
            heqInst: 32,
            heqMedia: 27,
            estado: "correcto",
          },
          {
            rango: "09-03 / 15-03",
            heqInst: 26,
            heqMedia: 33,
            estado: "warning",
          },
          {
            rango: "02-03 / 08-03",
            heqInst: 16,
            heqMedia: 26,
            estado: "incorrecto",
          },
        ],
      },
      semana: {
        heqInstalacion: 5,
        heqMedia: 5,
        estado: "correcto",
        dias: [
          { dia: "L", heqInst: 6, heqMedia: 6, estado: "correcto" },
          { dia: "M", heqInst: 6, heqMedia: 6, estado: "correcto" },
          { dia: "X", heqInst: 6, heqMedia: 6, estado: "correcto" },
          { dia: "J", heqInst: 6, heqMedia: 6, estado: "correcto" },
          { dia: "V", heqInst: 6, heqMedia: 6, estado: "correcto" },
          { dia: "S", heqInst: 6, heqMedia: 6, estado: "correcto" },
          { dia: "D", heqInst: 6, heqMedia: 6, estado: "correcto" },
        ],
      },
    },
  ],
};

export default instalacion;
