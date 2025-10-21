import React, { useEffect } from 'react';
import { SupportTicket } from '../../utils/api';
import { XIcon } from '../icons/XIcon';
import { useTheme } from '../../contexts/ThemeContext';

interface TicketDetailModalProps {
    ticket: SupportTicket;
    onClose: () => void;
}

const TicketDetailModal: React.FC<TicketDetailModalProps> = ({ ticket, onClose }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    // Handle Esc key press to close the modal
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const getStatusClasses = (status: string) => {
        switch (status) {
            case 'Fechado':
                return isDark ? 'bg-gray-500/20 text-gray-300' : 'bg-slate-200 text-slate-700';
            case 'Aberto':
                return isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700';
            case 'Aguardando':
            default:
                return isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ticket-modal-title"
        >
            <div 
                className={`aurora-card w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 relative ${isDark ? 'bg-[#1A202C]' : 'bg-white border border-black/10'}`}
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button 
                    onClick={onClose} 
                    className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-700'}`}
                    aria-label="Fechar modal"
                >
                    <XIcon className="h-6 w-6" />
                </button>
                
                <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                        <h2 id="ticket-modal-title" className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{ticket.subject}</h2>
                        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-600'}`}>Ticket ID: {ticket.id}</p>
                    </div>
                    <span className={`font-semibold text-xs px-2 py-1 rounded-full whitespace-nowrap ${getStatusClasses(ticket.status)}`}>
                        {ticket.status}
                    </span>
                </div>

                <div className={`pt-4 mt-4 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                    <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Histórico de Mensagens</h3>
                    <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                        {ticket.history && ticket.history.length > 0 ? (
                             [...ticket.history].reverse().map((item, index) => (
                                <div key={index} className={`p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <p className={`text-sm font-semibold ${item.author === 'Você' ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-teal-300' : 'text-teal-700')}`}>{item.author}</p>
                                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{item.timestamp}</p>
                                    </div>
                                    <p className={`text-sm whitespace-pre-wrap ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{item.message}</p>
                                </div>
                            ))
                        ) : (
                            <p className={`text-sm text-center ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Nenhuma mensagem no histórico.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TicketDetailModal;
