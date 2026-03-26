import { useTranslation } from 'react-i18next';
import {
  Flame, Dumbbell, Apple, TrendingUp,
  Calendar, Zap, Weight, ChevronRight, Plus
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
};

export default function Dashboard() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const calPct = Math.round((MOCK.calorias.consumidas / MOCK.calorias.objetivo) * 100);
    const pesoTendencia = MOCK.peso.actual < MOCK.peso.anterior ? 'down' : 'up';

    return(
        <div className='dash'>
            <div className='dash__header'>
                <div>
                    <h1 className='dash__greeting'>
                        {t('dashboard.welcome')}, <span className='dash__name'>{MOCK.nombre}</span>
                    </h1>
                    <p className='dash__date'>{formatDate(today, i18n.language)}</p>
                </div>
                <div className='dash__quick-actions'>
                    <button className='dash__action dash__action--primary' onClick={() => navigate('/rutinas')}>
                        <Dumbbell size={15} />
                        {t('dashboard.startWorkout')}
                    </button>
                    <button className='dash__action' onClick={() => navigate('/nutricion')}>
                        <Plus size={15} />
                        {t('dashboard.logMeal')}
                    </button>
                </div>
            </div>

            <div className='dash__grid'>

                <div className='dash__card dash__card--accent'>
                    <div className='dash__card-icon'><Flame size={22} /></div>
                    <div className='dash__card-body'>
                        <span className='dash__card-value'>{MOCK.racha}</span>
                        <span className='dash__card-unit'>{t('dashboard.days')}</span>
                    </div>
                    <p className='dash__card-label'>{t('dashboard.streak')}</p>
                </div>

                <div className='dash__card'>
                    <div className='dash__card-icon'><Zap size={22} /></div>
                    <div className='dash__card-body'>
                        <span className='dash__card-value'>{MOCK.statSemana.entrenamientos}</span>
                        <span className='dash__card-unit'>{t('dashboard.workouts')}</span>
                    </div>
                    <p className='dash__card-label'>{t('dashboard.thisWeek')}</p>
                    <p className='dash__card-sub'>{MOCK.statSemana.minutos}</p>
                </div>

                <div className='dash__card'>
                    <div className='dash__card-icon'><TrendingUp size={22} /></div>
                    <div className='dash__card-body'>
                        <span className='dash__card-value'>{MOCK.peso.actual}</span>
                        <span className='dash__card-unit'>kg</span>
                    </div>
                    <p className='dash__card-label'>{t('dashboard.weight')}</p>
                    <p className={`dash__card-sub dash__card-sub--${pesoTendencia}`}>
                        {pesoTendencia === 'down' ? '▼' : '▲'} {Math.abs(MOCK.peso.actual - MOCK.peso.anterior).toFixed(1)} kg
                    </p>
                </div>

                <div className='dash__card dash__card--wide'>
                    <div className='dash__card-top'>
                        <div className='dash__card-icon'><Apple size={22} /></div>
                        <p className='dash__card-label'>{t('dashboard.todayCalories')}</p>
                        <span className='dash__cal-nums'>
                            <strong>{MOCK.calorias.consumidas}</strong> / {MOCK.calorias.objetivo} kcal
                        </span>
                    </div>
                    <div className='dash__progress-bar'>
                        <div 
                            className='dash__progress-fill'
                            style={{ width: `${Math.min(calPct, 100)}%` }}
                        />
                        <p className='dash__card-sub'>{calPct}% {t('dashboard.ofGoal')}</p>
                    </div>

                    <div className='dash__card dash__card--row' onClick={() => navigate('/progreso')}>
                        <div className='dash__card-icon'><Calendar size={22} /></div>
                        <div className='dash__card-info'>
                            <p className='dash__card-label'>{t('dashboard.lastWorkout')}</p>
                            <p className='dash__card-title'>{MOCK.ultimoEntrenamiento.nombre}</p>
                            <p className='dash__card-sub'>
                                {MOCK.ultimoEntrenamiento.fecha} · {MOCK.ultimoEntrenamiento.duracion}
                            </p>
                        </div>
                        <ChevronRight size={18} className='dash__card-arrow' />
                    </div>

                    <div className='dash__card dash__card--row dash__card--highlight' onClick={() => navigate('/rutinas')}>
                        <div className='dash__card-icon'><Dumbbell size={22} /></div>
                        <div className='dash__card-info'>
                            <p className='dash__card-label'>{t('dashboard.nextRoutine')}</p>
                            <p className='dash__card-title'>{MOCK.proximaRutina.nombre}</p>
                            <p className='dash__card-sub'>{MOCK.proximaRutina.dia}</p>
                        </div>
                        <ChevronRight size={18} className='dash__card-arrow' />
                    </div>
                </div>
            </div>
        </div>
    )
}