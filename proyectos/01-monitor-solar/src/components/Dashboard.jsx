import React from "react";
import instalacion from "../data/instalacion";
import Meteorologia from "./Meteorologia";
import "./Dashboard.css";

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
      </div>
    </div>
  );
};

export default Dashboard;
