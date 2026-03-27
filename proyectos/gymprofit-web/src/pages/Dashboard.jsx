import { useTranslation } from 'react-i18next';
import {
  Flame, Dumbbell, Apple, TrendingUp,
  Calendar, Zap, ChevronRight, Plus,
  Trophy, Droplets, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const today = new Date();
const formatDate = (date, locale) =>
  date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    weekday: 'long', day: 'numeric', month: 'long'
  });

const MOCK = {
  nombre: 'Rubén',
  racha: 5,
  ultimoEntrenamiento: { nombre: 'Pecho y Tríceps', fecha: 'Ayer', duracion: '52 min' },
  calorias: { consumidas: 1840, objetivo: 2400 },
  proximaRutina: { nombre: 'Espalda y Bíceps', dia: 'Hoy' },
  statSemana: { entrenamientos: 4, minutos: 210 },
  peso: { actual: 78.5, anterior: 79.2 },
  macros: {
    proteinas: { actual: 142, objetivo: 180 },
    carbos: { actual: 210, objetivo: 280 },
    grasas: { actual: 55, objetivo: 70 },
  },
  agua: { vasos: 5, objetivo: 8 },
  actividad: [
    { dia: 'L', entrenó: true },
    { dia: 'M', entrenó: true },
    { dia: 'X', entrenó: false },
    { dia: 'J', entrenó: true },
    { dia: 'V', entrenó: true },
    { dia: 'S', entrenó: false },
    { dia: 'D', entrenó: false },
  ],
  logros: [
    { icono: '🏅', nombre: 'Primera semana', desc: '7 días registrado' },
    { icono: '💪', nombre: '10 entrenamientos', desc: 'Completados' },
    { icono: '🔥', nombre: 'Racha de 5 días', desc: 'Sin parar' },
  ],
  cita: {
    es: { texto: 'El dolor que sientes hoy será la fuerza que sentirás mañana.', autor: 'Arnold Schwarzenegger' },
    en: { texto: 'The pain you feel today will be the strength you feel tomorrow.', autor: 'Arnold Schwarzenegger' },
  },
  objetivo: { nombre: 'Perder 3kg', progreso: 65 },
  record: { ejercicio: 'Press Banca', peso: 100, anterior: 95 },
  notificaciones: [
    { texto: 'Llevas 5 días seguidos entrenando 🔥', tiempo: 'Hace 1h' },
    { texto: 'Nuevo récord en Press Banca', tiempo: 'Hace 3h' },
    { texto: 'Recuerda hidratarte bien hoy', tiempo: 'Hace 5h' },
  ],
  tip: {
    es: 'Descansar entre series 60-90 segundos maximiza la hipertrofia muscular.',
    en: 'Resting 60-90 seconds between sets maximizes muscle hypertrophy.',
  }
};

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const calPct = Math.round((MOCK.calorias.consumidas / MOCK.calorias.objetivo) * 100);
  const pesoTendencia = MOCK.peso.actual < MOCK.peso.anterior ? 'down' : 'up';
  const cita = MOCK.cita[i18n.language] || MOCK.cita.es;

  return (
    <div className="dash">
      <div className="dash__header">
        <div>
          <h1 className="dash__greeting">
            {t('dashboard.welcome')}, <span className="dash__name">{MOCK.nombre}</span>
          </h1>
          <p className="dash__date">{formatDate(today, i18n.language)}</p>
        </div>
        <div className="dash__quick-actions">
          <button className="dash__action dash__action--primary" onClick={() => navigate('/rutinas')}>
            <Dumbbell size={15} />
            {t('dashboard.startWorkout')}
          </button>
          <button className="dash__action" onClick={() => navigate('/nutricion')}>
            <Plus size={15} />
            {t('dashboard.logMeal')}
          </button>
        </div>
      </div>

      <div className="dash__grid">

        <div className="dash__card dash__card--accent">
          <div className="dash__card-icon"><Flame size={22} /></div>
          <div className="dash__card-body">
            <span className="dash__card-value">{MOCK.racha}</span>
            <span className="dash__card-unit">{t('dashboard.days')}</span>
          </div>
          <p className="dash__card-label">{t('dashboard.streak')}</p>
        </div>

        <div className="dash__card">
          <div className="dash__card-icon"><Zap size={22} /></div>
          <div className="dash__card-body">
            <span className="dash__card-value">{MOCK.statSemana.entrenamientos}</span>
            <span className="dash__card-unit">{t('dashboard.workouts')}</span>
          </div>
          <p className="dash__card-label">{t('dashboard.thisWeek')}</p>
          <p className="dash__card-sub">{MOCK.statSemana.minutos} min {t('dashboard.total')}</p>
        </div>

        <div className="dash__card">
          <div className="dash__card-icon"><TrendingUp size={22} /></div>
          <div className="dash__card-body">
            <span className="dash__card-value">{MOCK.peso.actual}</span>
            <span className="dash__card-unit">kg</span>
          </div>
          <p className="dash__card-label">{t('dashboard.weight')}</p>
          <p className={`dash__card-sub dash__card-sub--${pesoTendencia}`}>
            {pesoTendencia === 'down' ? '▼' : '▲'} {Math.abs(MOCK.peso.actual - MOCK.peso.anterior).toFixed(1)} kg
          </p>
        </div>

        <div className="dash__card dash__card--mid">
          <div className="dash__card-icon"><Trophy size={22} /></div>
          <p className="dash__card-label">{t('dashboard.newRecord')}</p>
          <p className="dash__card-title" style={{ marginTop: '0.4rem' }}>{MOCK.record.ejercicio}</p>
          <p className="dash__side-record-value">{MOCK.record.peso} <span>kg</span></p>
          <p className="dash__card-sub">+{MOCK.record.peso - MOCK.record.anterior}kg {t('dashboard.vsPrevious')}</p>
        </div>

        <div className="dash__card dash__card--wide">
          <div className="dash__card-top">
            <div className="dash__card-icon"><Apple size={22} /></div>
            <p className="dash__card-label">{t('dashboard.todayCalories')}</p>
            <span className="dash__cal-nums">
              <strong>{MOCK.calorias.consumidas}</strong> / {MOCK.calorias.objetivo} kcal
            </span>
          </div>
          <div className="dash__progress-bar">
            <div className="dash__progress-fill" style={{ width: `${Math.min(calPct, 100)}%` }} />
          </div>
          <p className="dash__card-sub">{calPct}% {t('dashboard.ofGoal')}</p>
        </div>

        <div className="dash__card dash__card--wide">
          <p className="dash__card-label" style={{ marginBottom: '1rem' }}>{t('dashboard.macros')}</p>
          <div className="dash__macros">
            {[
              { key: 'proteinas', label: t('dashboard.protein'), color: '#e8330a' },
              { key: 'carbos', label: t('dashboard.carbs'), color: '#f0a500' },
              { key: 'grasas', label: t('dashboard.fats'), color: '#4caf7d' },
            ].map(({ key, label, color }) => {
              const pct = Math.round((MOCK.macros[key].actual / MOCK.macros[key].objetivo) * 100);
              return (
                <div key={key} className="dash__macro">
                  <div className="dash__macro-header">
                    <span className="dash__macro-label">{label}</span>
                    <span className="dash__macro-nums">
                      {MOCK.macros[key].actual}g <span style={{ opacity: 0.5 }}>/ {MOCK.macros[key].objetivo}g</span>
                    </span>
                  </div>
                  <div className="dash__progress-bar">
                    <div className="dash__progress-fill" style={{ width: `${Math.min(pct, 100)}%`, background: color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dash__card dash__card--mid">
          <p className="dash__card-label" style={{ marginBottom: '1rem' }}>{t('dashboard.weeklyActivity')}</p>
          <div className="dash__activity">
            {MOCK.actividad.map(({ dia, entrenó }) => (
              <div key={dia} className="dash__activity-col">
                <div className={`dash__activity-bar ${entrenó ? 'dash__activity-bar--active' : ''}`} />
                <span className="dash__activity-day">{dia}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dash__card dash__card--mid">
          <div className="dash__card-icon"><Droplets size={22} /></div>
          <p className="dash__card-label">{t('dashboard.water')}</p>
          <div className="dash__water">
            {Array.from({ length: MOCK.agua.objetivo }).map((_, i) => (
              <div key={i} className={`dash__water-glass ${i < MOCK.agua.vasos ? 'dash__water-glass--filled' : ''}`} />
            ))}
          </div>
          <p className="dash__card-sub">{MOCK.agua.vasos} / {MOCK.agua.objetivo} {t('dashboard.glasses')}</p>
        </div>

        <div className="dash__card dash__card--mid">
          <div className="dash__card-icon"><Trophy size={22} /></div>
          <p className="dash__card-label">{t('dashboard.nextGoal')}</p>
          <p className="dash__card-title" style={{ marginTop: '0.5rem' }}>{MOCK.objetivo.nombre}</p>
          <div className="dash__progress-bar" style={{ marginTop: '0.75rem' }}>
            <div className="dash__progress-fill" style={{ width: `${MOCK.objetivo.progreso}%`, background: '#4caf7d' }} />
          </div>
          <p className="dash__card-sub">{MOCK.objetivo.progreso}% {t('dashboard.completed')}</p>
        </div>

        <div className="dash__card dash__card--row" onClick={() => navigate('/progreso')}>
          <div className="dash__card-icon"><Calendar size={22} /></div>
          <div className="dash__card-info">
            <p className="dash__card-label">{t('dashboard.lastWorkout')}</p>
            <p className="dash__card-title">{MOCK.ultimoEntrenamiento.nombre}</p>
            <p className="dash__card-sub">{MOCK.ultimoEntrenamiento.fecha} · {MOCK.ultimoEntrenamiento.duracion}</p>
          </div>
          <ChevronRight size={18} className="dash__card-arrow" />
        </div>

        <div className="dash__card dash__card--row dash__card--highlight" onClick={() => navigate('/rutinas')}>
          <div className="dash__card-icon"><Dumbbell size={22} /></div>
          <div className="dash__card-info">
            <p className="dash__card-label">{t('dashboard.nextRoutine')}</p>
            <p className="dash__card-title">{MOCK.proximaRutina.nombre}</p>
            <p className="dash__card-sub">{MOCK.proximaRutina.dia}</p>
          </div>
          <ChevronRight size={18} className="dash__card-arrow" />
        </div>

        <div className="dash__card dash__card--half">
          <div className="dash__card-top" style={{ marginBottom: '1rem' }}>
            <div className="dash__card-icon"><Trophy size={22} /></div>
            <p className="dash__card-label">{t('dashboard.achievements')}</p>
          </div>
          <div className="dash__logros">
            {MOCK.logros.map(({ icono, nombre, desc }) => (
              <div key={nombre} className="dash__logro">
                <span className="dash__logro-icon">{icono}</span>
                <div>
                  <p className="dash__logro-nombre">{nombre}</p>
                  <p className="dash__logro-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dash__card dash__card--half">
          <div className="dash__side-notif-header">
            <p className="dash__card-label">{t('dashboard.notifications')}</p>
            <Bell size={15} style={{ color: 'var(--text-secondary)' }} />
          </div>
          <div className="dash__notifs">
            {MOCK.notificaciones.map(({ texto, tiempo }) => (
              <div key={texto} className="dash__notif">
                <p className="dash__notif-texto">{texto}</p>
                <p className="dash__notif-tiempo">{tiempo}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dash__card dash__card--wide dash__card--quote">
          <p className="dash__quote-text">"{cita.texto}"</p>
          <p className="dash__quote-autor">— {cita.autor}</p>
        </div>

      </div>
    </div>
  );
}