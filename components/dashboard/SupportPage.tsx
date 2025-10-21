import React, { useState, useEffect } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { SupportTicket } from '../../utils/api';
import TicketDetailModal from './TicketDetailModal';
import { useTheme } from '../../contexts/ThemeContext';

interface SupportPageProps {
    tickets: SupportTicket[];
    onCreateTicket: (data: { subject: string; service: string; message: string }) => Promise<void>;
}

const SupportPage: React.FC<SupportPageProps> = ({ tickets, onCreateTicket }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
    const [formData, setFormData] = useState({ subject: '', service: 'Site Institucional', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');

    useEffect(() => {
        if (submitStatus !== 'idle') {
            const timer = setTimeout(() => {
                setSubmitStatus('idle');
                setSubmitMessage('');
            }, 5000); 
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!formData.subject || !formData.message) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitMessage('');

        try {
            await onCreateTicket(formData);
            setSubmitStatus('success');
            setSubmitMessage('Ticket enviado com sucesso! Entraremos em contato em breve.');
            setFormData({ subject: '', service: 'Site Institucional', message: '' });
        } catch (error) {
            setSubmitStatus('error');
            setSubmitMessage('Houve um erro ao enviar seu ticket. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <AnimateOnScroll>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* New Ticket Form */}
                    <div className="lg:col-span-2">
                        <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Suporte ao Cliente</h2>
                        <div className={`aurora-card p-8 ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Abrir um novo ticket</h3>
                            <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} mb-6`}>Nossa equipe responderá em até 24 horas úteis.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="subject" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Assunto</label>
                                    <input type="text" id="subject" value={formData.subject} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border ${isDark ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-900 border-slate-300'}`} placeholder="Ex: Dúvida sobre o chatbot" required />
                                </div>
                                <div>
                                    <label htmlFor="service" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Serviço Relacionado</label>
                                    <select id="service" value={formData.service} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border ${isDark ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-900 border-slate-300'}`} required>
                                        <option>Site Institucional</option>
                                        <option>Chatbot Instagram</option>
                                        <option>Financeiro</option>
                                        <option>Outro</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Mensagem</label>
                                    <textarea id="message" rows={5} value={formData.message} onChange={handleInputChange} className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border ${isDark ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-900 border-slate-300'}`} placeholder="Descreva seu problema ou dúvida em detalhes..." required></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto cta-button text-white font-semibold px-8 py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Ticket'}</span>
                                    {!isSubmitting && <ArrowRightIcon className="w-4 h-4" />}
                                </button>
                                {submitStatus !== 'idle' && (
                                    <p className={`mt-4 text-sm p-3 rounded-lg ${submitStatus === 'success' ? (isDark ? 'bg-green-500/10 text-green-300' : 'bg-green-100 text-green-700') : (isDark ? 'bg-red-500/10 text-red-300' : 'bg-red-100 text-red-700')}`}>{submitMessage}</p>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Ticket History */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 invisible hidden lg:block">.</h2>
                        <div className={`aurora-card p-8 ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Meus Tickets</h3>
                             {tickets.length > 0 ? (
                                <ul className="space-y-4">
                                    {tickets.map(ticket => (
                                        <li 
                                            key={ticket.id} 
                                            className={`p-4 rounded-lg border transition-colors cursor-pointer ${isDark ? 'bg-slate-800/50 border-white/5 hover:bg-slate-700/50' : 'bg-slate-50 border-black/5 hover:bg-slate-100'}`}
                                            onClick={() => setSelectedTicket(ticket)}
                                            onKeyDown={(e) => e.key === 'Enter' && setSelectedTicket(ticket)}
                                            tabIndex={0}
                                            role="button"
                                            aria-label={`Ver detalhes do ticket ${ticket.subject}`}
                                        >
                                            <div className="flex justify-between items-start">
                                                <p className={`font-semibold truncate pr-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{ticket.subject}</p>
                                                <span className={`font-semibold text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                                                    ticket.status === 'Fechado' ? (isDark ? 'bg-gray-500/20 text-gray-300' : 'bg-slate-200 text-slate-700') 
                                                    : ticket.status === 'Aberto' ? (isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700')
                                                    : (isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                                                }`}>{ticket.status}</span>
                                            </div>
                                            <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Última atualização: {ticket.lastUpdate}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} text-center`}>Nenhum ticket encontrado.</p>
                            )}
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
            {selectedTicket && (
                <TicketDetailModal 
                    ticket={selectedTicket}
                    onClose={() => setSelectedTicket(null)}
                />
            )}
        </>
    );
};

export default SupportPage;
