import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LogIn, Eye, EyeOff, UserRound } from 'lucide-react';
import './Login.css';

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTimeout(() => navigate('/dashboard'), 800);
    } catch {
      setError(t('auth.error'));
      setLoading(false);
    }
  };

  const handleGuest = () => {
    localStorage.setItem('guest', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <div className="login__visual">
        <div className="login__visual-overlay" />
        <div className="login__visual-content">
          <h1 className="login__brand">
            <span>GYM</span>
            <span className="login__brand-accent">PRO</span>
            <span>FIT</span>
          </h1>
          <p className="login__tagline">{t('auth.tagline')}</p>
        </div>
      </div>

      <div className="login__form-side">
        <div className="login__form-wrapper">
          <h2 className="login__title">{t('auth.login')}</h2>
          <p className="login__subtitle">
            {t('auth.noAccount')}{' '}
            <Link to="/register" className="login__link">
              {t('auth.register')}
            </Link>
          </p>

          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__field">
              <label className="login__label">{t('auth.email')}</label>
              <input
                className="login__input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="login__field">
              <label className="login__label">{t('auth.password')}</label>
              <div className="login__input-wrapper">
                <input
                  className="login__input"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="login__eye"
                  onClick={() => setShowPassword(p => !p)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="login__error">{error}</p>}

            <button
              className={`login__btn ${loading ? 'login__btn--loading' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="login__spinner" />
              ) : (
                <>
                  <LogIn size={18} />
                  {t('auth.login')}
                </>
              )}
            </button>

            <div className="login__divider">
              <span>{t('common.or') || 'o'}</span>
            </div>

            <button
              type="button"
              className="login__btn login__btn--guest"
              onClick={handleGuest}
            >
              <UserRound size={18} />
              {t('auth.guest')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}