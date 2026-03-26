import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserPlus, Eye, EyeOff } from 'lucide-react';
import './Login.css';

export default function Register() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        password: '',
        confirm: '',
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        setError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( form.password !== form.confirm) {
            setError(t('auth.passwordMismatch'));
            return;
        }
        if (form.password.length < 6) {
            setError(t('auth.passwordShort'));
            return;
        }
        setLoading(true);
        try {
            // TODO: conectar con API Spring Boot
            // await axios.post('/api/auth/register', { nombre, email, password });
            setTimeout(() => navigate('/login'), 800);
        } catch {
            setError(t('auth.error'));
            setLoading(false);
        }
    }

    return (
        <div className='login'>
            <div className='login__visual'>
                <div className='login__visual-overlay' />
                <div className='login__visual-content'>
                    <h1 className='login__brand'>
                        <span>GYM</span>
                        <span className='login__brand-accent'>PRO</span>
                        <span>FIT</span>
                    </h1>
                    <p className='login__tagline'>{t('auth.tagline')}</p>
                </div>
            </div>

            <div className='login__form-side'>
                <div className='login__form-wrapper'>
                    <h2 className="login__title">{t('auth.register')}</h2>
                    <p className='login__subtitle'>
                        {t('auth.hasAccount')}{' '}
                        <Link to="/login" className='login__link'>
                            {t('auth.login')}
                        </Link>
                    </p>

                    <form className='login__form' onSubmit={handleSubmit}>
                        <div className='login__field'>
                            <label className='login__label'>{t('auth.name')}</label>
                            <input 
                                className='login__input'
                                type='text'
                                name='nombre'
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder='Tu nombre'
                                required
                            />
                        </div>

                        <div className='login__field'>
                            <label className='login__label'>{t('auth.password')}</label>
                            <div className='login__input-wrapper'>
                                <input
                                    className='login__input'
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder='Introduce la contraseña (Mínimo 6 caracteres)'
                                    required
                                />
                                <button
                                    type='button'
                                    className='login__eye'
                                    onClick={() => setShowPassword(p => !p)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className='login__field'>
                            <label className='login__label'>{t('auth.confirmPassword')}</label>
                            <div className='login__input-wrapper'>
                                <input 
                                    className='login__input'
                                    type={showConfirm ? 'text' : 'password'}
                                    name='confirm'
                                    value={form.confirm}
                                    onChange={handleChange}
                                    placeholder='Repite la contraseña'
                                    required
                                />
                                <button 
                                    type='button'
                                    className='login__eye'
                                    onClick={() => setShowConfirm(p => !p)}
                                >
                                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {error && <p className='login__error'>{error}</p>}

                        <button
                            className={`login__btn ${loading ? 'login__btn--loading' : ''}`}
                            type='submit'
                            disabled={loading}
                        >
                            {loading ? (
                                <span className='login__spinner' />
                            ) : (
                                <>
                                    <UserPlus size={18} />
                                    {t('auth.register')}
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}