import React, { useState } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import { DownloadIcon } from '../icons/DownloadIcon';
import { Invoice } from '../../utils/api';
import { useTheme } from '../../contexts/ThemeContext';

interface BillingPageProps {
    invoices: Invoice[];
    onPayInvoice: (invoiceId: string) => Promise<void>;
}

const BillingPage: React.FC<BillingPageProps> = ({ invoices, onPayInvoice }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [payingId, setPayingId] = useState<string | null>(null);

    const handlePayInvoice = async (invoiceId: string) => {
        setPayingId(invoiceId);
        try {
            await onPayInvoice(invoiceId);
        } catch {
            // Optional: Show an error message specific to this page
        } finally {
            setPayingId(null);
        }
    };

    return (
        <AnimateOnScroll>
            <div>
                <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Histórico Financeiro</h2>
                <div className={`aurora-card p-4 sm:p-6 lg:p-8 ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                    {invoices.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className={`${isDark ? 'border-white/10' : 'border-black/10'} border-b`}>
                                    <tr>
                                        <th className={`p-4 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Fatura</th>
                                        <th className={`p-4 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Data</th>
                                        <th className={`p-4 text-sm font-semibold hidden md:table-cell ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Serviço</th>
                                        <th className={`p-4 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Valor</th>
                                        <th className={`p-4 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Status</th>
                                        <th className={`p-4 text-right text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map(invoice => (
                                        <tr key={invoice.id} className={`border-b last:border-0 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                                            <td className={`p-4 font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{invoice.id}</td>
                                            <td className={`p-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{invoice.date}</td>
                                            <td className={`p-4 hidden md:table-cell ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{invoice.service}</td>
                                            <td className={`p-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{invoice.amount}</td>
                                            <td className="p-4">
                                                <span className={`font-semibold text-xs px-2 py-1 rounded-full ${
                                                    invoice.status === 'Paga' ? (isDark ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-100 text-teal-700')
                                                    : invoice.status === 'Pendente' ? (isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                                                    : (isDark ? 'bg-red-500/20 text-red-300' : 'bg-red-100 text-red-700')}`
                                                }>{invoice.status}</span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {invoice.status === 'Pendente' && (
                                                        <button 
                                                            onClick={() => handlePayInvoice(invoice.id)}
                                                            disabled={payingId === invoice.id}
                                                            className={`text-sm font-semibold px-3 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-wait ${isDark ? 'bg-teal-500/20 text-teal-300 hover:bg-teal-500/40' : 'bg-teal-100 text-teal-700 hover:bg-teal-200'}`}
                                                        >
                                                            {payingId === invoice.id ? 'Pagando...' : 'Pagar'}
                                                        </button>
                                                    )}
                                                    <a 
                                                        href="#"
                                                        onClick={(e) => e.preventDefault()}
                                                        aria-label={`Download PDF for invoice ${invoice.id}`}
                                                        className={`transition-colors p-2 rounded-md inline-block ${isDark ? 'text-gray-400 hover:text-teal-400 hover:bg-white/10' : 'text-slate-500 hover:text-teal-700 hover:bg-slate-100'}`}
                                                    >
                                                        <DownloadIcon className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Nenhuma fatura encontrada.</p>
                    )}
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default BillingPage;
