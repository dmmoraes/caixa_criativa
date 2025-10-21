import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import { CheckIcon } from '../icons/CheckIcon';
import { PaperclipIcon } from '../icons/PaperclipIcon';
import { TrendingUpIcon } from '../icons/TrendingUpIcon';
import { Service } from '../../utils/api';
import { useTheme } from '../../contexts/ThemeContext';

interface MyServicesPageProps {
    services: Service[];
}

const StageTracker: React.FC<{ stages: { name: string, completed: boolean }[] }> = ({ stages }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto pb-2">
            {stages.map((stage, index) => (
                <div key={stage.name} className="flex items-center flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${stage.completed ? (isDark ? 'bg-teal-500 border-teal-400' : 'bg-teal-500 border-teal-400') : (isDark ? 'bg-slate-700 border-slate-600' : 'bg-slate-200 border-slate-300')}`}>
                        {stage.completed && <CheckIcon className={`w-5 h-5 ${isDark ? 'text-white' : 'text-white'}`} />}
                    </div>
                    <span className={`ml-2 text-sm font-medium ${stage.completed ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-gray-400' : 'text-slate-600')}`}>{stage.name}</span>
                    {index < stages.length - 1 && <div className={`hidden md:block w-12 h-0.5 ml-4 ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}></div>}
                </div>
            ))}
        </div>
    );
};

const MyServicesPage: React.FC<MyServicesPageProps> = ({ services }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <AnimateOnScroll>
            <div className="space-y-8">
                <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Meus Serviços</h2>
                {services.length > 0 ? services.map((service, index) => (
                    <div key={index} className={`aurora-card p-8 ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                        <div className="md:flex justify-between items-start mb-6">
                            <div>
                                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.name}</h3>
                                <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Início em {service.startDate} | Entrega: {service.endDate}</p>
                            </div>
                            <span className={`mt-2 md:mt-0 font-semibold text-sm px-3 py-1 rounded-full ${service.status === 'Ativo' ? (isDark ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-100 text-teal-700') : (isDark ? 'bg-yellow-500/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700')}`}>{service.status}</span>
                        </div>

                        {service.stages &&
                            <div className="mb-8">
                                <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Progresso do Projeto</h4>
                                <StageTracker stages={service.stages} />
                            </div>
                        }

                        <div className="grid md:grid-cols-2 gap-8">
                            {service.metrics &&
                                <div>
                                    <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}><TrendingUpIcon className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}/>Métricas de Performance</h4>
                                    <div className="space-y-3">
                                        {service.metrics.map(metric => (
                                            <div key={metric.name} className={`flex justify-between p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                                                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{metric.name}</span>
                                                <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{metric.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                            {service.files &&
                                <div>
                                    <h4 className={`text-sm font-semibold mb-3 flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}><PaperclipIcon className={`w-5 h-5 ${isDark ? 'text-pink-400' : 'text-pink-600'}`}/>Arquivos e Links</h4>
                                    <div className="space-y-3">
                                        {service.files.map(file => (
                                            <a href={file.link} key={file.name} target="_blank" rel="noopener noreferrer" className={`flex items-center p-3 rounded-lg transition-colors ${isDark ? 'bg-slate-800/50 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}>
                                                <span className={`text-sm underline ${isDark ? 'text-teal-400' : 'text-teal-700'}`}>{file.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                )) : <div className={`aurora-card p-8 text-center ${isDark ? 'text-gray-400' : 'text-slate-600 bg-white/90 border border-black/10'}`}>Você ainda não possui serviços contratados.</div>}
            </div>
        </AnimateOnScroll>
    );
};

export default MyServicesPage;
