import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import { PackageIcon } from '../icons/PackageIcon';
import { CreditCardIcon } from '../icons/CreditCardIcon';
import { LifeBuoyIcon } from '../icons/LifeBuoyIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { useChatbot } from '../../contexts/ChatbotContext';
import { DashboardView } from '../Dashboard';
import { Service, Invoice } from '../../utils/api';
import { useTheme } from '../../contexts/ThemeContext';

interface DashboardOverviewProps {
    setActiveView: (view: DashboardView) => void;
    services: Service[];
    invoices: Invoice[];
}

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Ativo':
            return 'bg-teal-500';
        case 'Em Desenvolvimento':
            return 'bg-yellow-500';
        case 'Concluído':
        default:
            return 'bg-gray-500';
    }
};

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ setActiveView, services, invoices }) => {
    const { openChat } = useChatbot();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const nextInvoice = invoices.find(inv => inv.status === 'Pendente');

    const handleSupportClick = () => {
        openChat("Olá! Preciso de ajuda com um dos meus serviços.");
    };

    return (
        <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* My Services Card */}
                    <div className={`aurora-card p-8 ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <PackageIcon className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Meus Serviços</h2>
                            </div>
                            <button onClick={() => setActiveView('services')} className={`text-sm font-semibold ${isDark ? 'text-teal-400' : 'text-teal-600'} hover:underline`}>Ver todos</button>
                        </div>
                        <div className="space-y-6">
                            {services.length > 0 ? services.slice(0, 2).map(service => (
                                <div key={service.name} className={`p-4 rounded-lg border ${isDark ? 'bg-slate-800/50 border-white/5' : 'bg-slate-50 border-black/5'}`}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.name}</span>
                                        <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                                            <span className={`w-2.5 h-2.5 rounded-full ${getStatusColor(service.status)}`}></span>
                                            <span>{service.status}</span>
                                        </div>
                                    </div>
                                    <div className={`w-full rounded-full h-2.5 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                                        <div className={`bg-gradient-to-r from-purple-500 to-teal-400 h-2.5 rounded-full`} style={{ width: `${service.progress}%` }}></div>
                                    </div>
                                </div>
                            )) : <p className="text-gray-400">Nenhum serviço ativo no momento.</p>}
                        </div>
                    </div>
                    
                    {/* Invoices Card */}
                    <div className={`aurora-card p-8 ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <CreditCardIcon className={`w-8 h-8 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Últimas Faturas</h2>
                            </div>
                            <button onClick={() => setActiveView('billing')} className={`text-sm font-semibold ${isDark ? 'text-teal-400' : 'text-teal-600'} hover:underline`}>Ver histórico</button>
                        </div>
                        {invoices.length > 0 ? (
                            <ul className="divide-y divide-white/10">
                            {invoices.slice(0, 3).map(invoice => (
                                <li key={invoice.id} className="py-3 flex justify-between items-center">
                                    <div>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{invoice.id} - <span className={`${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{invoice.date}</span></p>
                                        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-slate-600'}`}>{invoice.amount}</p>
                                    </div>
                                    <span className={`font-semibold text-sm px-2 py-0.5 rounded-full ${invoice.status === 'Paga' ? (isDark ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-100 text-teal-700') : (isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700')}`}>{invoice.status}</span>
                                </li>
                            ))}
                            </ul>
                        ) : <p className="text-gray-400">Nenhuma fatura encontrada.</p>}
                    </div>
                </div>

                {/* Sidebar column */}
                <div className="space-y-8">
                    {/* Next Invoice Card */}
                    {nextInvoice && (
                         <div className={`aurora-card p-8 bg-gradient-to-br from-purple-500/20 to-teal-500/20 ${isDark ? '' : 'border border-black/10'}`}>
                            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2`}>Próxima Fatura</h3>
                            <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{nextInvoice.amount}</p>
                            <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} mb-4`}>Vencimento em {nextInvoice.date}</p>
                            <button onClick={() => setActiveView('billing')} className={`w-full transition-colors font-semibold py-3 rounded-lg ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-900'}`}>
                                Pagar agora
                            </button>
                        </div>
                    )}

                    {/* Support Card */}
                    <div className={`aurora-card p-8 text-center ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                        <LifeBuoyIcon className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} />
                        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Precisa de ajuda?</h3>
                        <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} mb-6`}>Nossa equipe está pronta para te auxiliar.</p>
                        <button onClick={handleSupportClick} className={`w-full cta-button font-semibold py-3 flex items-center justify-center space-x-2 ${isDark ? 'text-white' : 'text-white'}`}>
                            <span>Falar com suporte</span>
                            <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default DashboardOverview;
