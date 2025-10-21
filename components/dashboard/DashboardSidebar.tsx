import React from 'react';
import { DashboardView } from '../Dashboard';
import { LayoutGridIcon } from '../icons/LayoutGridIcon';
import { PackageIcon } from '../icons/PackageIcon';
import { CreditCardIcon } from '../icons/CreditCardIcon';
import { LifeBuoyIcon } from '../icons/LifeBuoyIcon';
import { PlusCircleIcon } from '../icons/PlusCircleIcon';
import { BookOpenIcon } from '../icons/BookOpenIcon';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
    activeView: DashboardView;
    setActiveView: (view: DashboardView) => void;
}

const navItems = [
    { id: 'overview', label: 'Visão Geral', icon: LayoutGridIcon },
    { id: 'services', label: 'Meus Serviços', icon: PackageIcon },
    { id: 'billing', label: 'Financeiro', icon: CreditCardIcon },
    { id: 'support', label: 'Suporte', icon: LifeBuoyIcon },
    { id: 'new-services', label: 'Novos Serviços', icon: PlusCircleIcon },
    { id: 'knowledge-base', label: 'Ajuda', icon: BookOpenIcon },
];

const DashboardSidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <aside className="lg:col-span-3 xl:col-span-2">
            <nav className={`aurora-card p-2 ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                <ul className="space-y-1">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button
                                onClick={() => setActiveView(item.id as DashboardView)}
                                className={`relative w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all duration-200 ease-in-out group overflow-hidden ${
                                    activeView === item.id 
                                        ? (isDark ? 'bg-slate-700/60 text-white font-semibold' : 'bg-slate-100 text-slate-900 font-semibold') 
                                        : (isDark ? 'text-gray-400 hover:bg-slate-800/70 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900')
                                }`}
                            >
                                {/* Active State Indicator */}
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 ${isDark ? 'bg-teal-400' : 'bg-teal-500'} rounded-r-full transition-transform duration-300 ease-out ${
                                    activeView === item.id ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-75'
                                }`}></div>

                                <item.icon className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
                                    activeView === item.id ? (isDark ? 'text-teal-400' : 'text-teal-500') : (isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-slate-400 group-hover:text-slate-600')
                                }`} />
                                <span>{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default DashboardSidebar;
