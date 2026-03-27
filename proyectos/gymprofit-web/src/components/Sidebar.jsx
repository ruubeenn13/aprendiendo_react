import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import {
  LayoutDashboard, Dumbbell, Flame,
  Apple, TrendingUp, User
} from 'lucide-react';
import './Sidebar.css';

const NAV_ITEMS = [
  { key: 'dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
  { key: 'routines', path: '/rutinas', icon: <Dumbbell size={18} /> },
  { key: 'exercises', path: '/ejercicios', icon: <Flame size={18} /> },
  { key: 'nutrition', path: '/nutricion', icon: <Apple size={18} /> },
  { key: 'progress', path: '/progreso', icon: <TrendingUp size={18} /> },
  { key: 'profile', path: '/perfil', icon: <User size={18} /> },
];

const FLAGS = {
  es: {
    label: 'ES',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="22" height="15">
        <rect width="60" height="40" fill="#c60b1e"/>
        <rect y="10" width="60" height="20" fill="#ffc400"/>
      </svg>
    )
  },
  en: {
    label: 'EN',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="22" height="15">
        <rect width="60" height="40" fill="#012169"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
      </svg>
    )
  }
};

export default function Sidebar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__logo">
          <span className="sidebar__logo-text">GYM</span>
          <span className="sidebar__logo-accent">PRO</span>
          <span className="sidebar__logo-text">FIT</span>
        </div>

        <nav className="sidebar__nav">
          {NAV_ITEMS.map(({ key, path, icon }) => (
            <NavLink
              key={key}
              to={path}
              className={({ isActive }) =>
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
              }
            >
              <span className="sidebar__icon">{icon}</span>
              <span className="sidebar__label">{t(`nav.${key}`)}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__bottom">
          <div className="sidebar__controls">
            <button className="sidebar__toggle" onClick={toggleTheme} title="Cambiar tema">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <button className="sidebar__toggle sidebar__toggle--lang" onClick={toggleLanguage} title="Cambiar idioma">
              {FLAGS[language].svg}
              <span>{FLAGS[language].label}</span>
            </button>
          </div>
          <button className="sidebar__logout" onClick={handleLogout}>
            {t('nav.logout')}
          </button>
        </div>
      </aside>

      <nav className="sidebar__mobile-nav">
        {NAV_ITEMS.map(({ key, path, icon }) => (
          <NavLink
            key={key}
            to={path}
            className={({ isActive }) =>
              `sidebar__mobile-link ${isActive ? 'sidebar__mobile-link--active' : ''}`
            }
          >
            {icon}
            <span>{t(`nav.${key}`)}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}