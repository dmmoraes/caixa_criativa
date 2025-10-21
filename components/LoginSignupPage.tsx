import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

interface LoginSignupPageProps {
  onSuccess?: () => void;
}

const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ onSuccess }) => {
  const { sendMagicLink } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await sendMagicLink(email);
      setSent(true);
      onSuccess?.();
    } catch (err: any) {
      setError(err?.message || 'Falha ao enviar Magic Link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center px-4 ${isDark ? 'bg-black/60' : 'bg-black/40'}`}>
        <div 
          className={`aurora-card rounded-2xl p-6 sm:p-8 overflow-auto ${isDark ? '' : 'bg-white/90 border border-black/10'}
                      w-[92vw] max-w-[560px] aspect-square`}
          role="dialog" aria-modal="true" aria-labelledby="auth-modal-title"
        >
          <div className="mb-6 flex justify-center" />

          <h1 id="auth-modal-title" className={`text-2xl font-bold mb-2 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Acesse sua conta
          </h1>
          <p className={`text-center mb-6 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Enviaremos um link mágico para seu e-mail
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>E-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border ${isDark ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-900 border-slate-300'}`}
                placeholder="voce@exemplo.com"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full cta-button text-white font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Aguarde...' : 'Enviar Magic Link'}
            </button>
            <div className="relative">
              <div className={`my-4 h-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
              <button
                type="button"
                onClick={() => {
                  const base = (import.meta as any).env?.VITE_N8N_BASE_URL || '';
                  // Endpoint n8n recomendado para iniciar OAuth Google
                  window.location.href = `${base}/auth/google/start`;
                }}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${isDark ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
              >
                Entrar com Google
              </button>
            </div>
            {error && (
              <p className={`text-sm mt-2 p-3 rounded-lg ${isDark ? 'bg-red-500/10 text-red-300' : 'bg-red-100 text-red-700'}`}>{error}</p>
            )}
            {sent && (
              <p className={`text-sm mt-2 p-3 rounded-lg ${isDark ? 'bg-green-500/10 text-green-300' : 'bg-green-100 text-green-700'}`}>
                Link enviado! Verifique seu e-mail para acessar.
              </p>
            )}
          </form>

          <p className={`mt-6 text-center text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Não precisa de senha. Você receberá um link para entrar.
          </p>
        </div>
    </div>
  );
};

export default LoginSignupPage;
