import React, { useState, useMemo } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { KnowledgeArticle } from '../../utils/api';
import { useTheme } from '../../contexts/ThemeContext';

interface KnowledgeBasePageProps {
    articles: KnowledgeArticle[];
}

const KnowledgeBasePage: React.FC<KnowledgeBasePageProps> = ({ articles: initialArticles }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const filteredArticles = useMemo(() => {
        if (!searchQuery.trim()) {
            return initialArticles;
        }
        const lowerCaseQuery = searchQuery.toLowerCase();
        return initialArticles.filter(
            article => 
                article.title.toLowerCase().includes(lowerCaseQuery) ||
                article.description.toLowerCase().includes(lowerCaseQuery) ||
                article.category.toLowerCase().includes(lowerCaseQuery)
        );
    }, [searchQuery, initialArticles]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <AnimateOnScroll>
            <div>
                <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Base de Conhecimento</h2>
                <p className={`text-lg max-w-2xl mb-8 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                    Encontre artigos, guias e tutoriais para tirar o máximo proveito das suas ferramentas.
                </p>

                {/* Search Bar */}
                <form onSubmit={(e) => e.preventDefault()} className="relative mb-12">
                    <input 
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Buscar por um tópico... (Ex: SEO, chatbot, pagamentos)"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border ${isDark ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-900 border-slate-300'}`}
                    />
                    <SearchIcon className={`absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 ${isDark ? 'text-gray-400' : 'text-slate-500'}`} />
                    <button type="submit" className="sr-only">Buscar</button>
                </form>

                {/* Articles */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.length > 0 ? filteredArticles.map((article, index) => (
                        <AnimateOnScroll key={article.slug} style={{ transitionDelay: `${index * 50}ms` }}>
                            <div className={`aurora-card p-6 group flex flex-col h-full ${isDark ? '' : 'bg-white/90 border border-black/10'}`}>
                                <div className="flex-grow">
                                    <span className={`text-sm font-semibold mb-2 block ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{article.category}</span>
                                    <h3 className={`text-lg font-bold mb-2 transition-colors ${isDark ? 'text-white group-hover:text-teal-400' : 'text-slate-900 group-hover:text-teal-700'}`}>
                                        {article.title}
                                    </h3>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                        {article.description}
                                    </p>
                                </div>
                                <a href="#" onClick={(e) => e.preventDefault()} className={`font-semibold flex items-center mt-4 group-hover:underline text-sm ${isDark ? 'text-teal-400' : 'text-teal-700'}`}>
                                    Ler artigo <ArrowRightIcon className={`w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform ${isDark ? '' : 'text-teal-700'}`} />
                                </a>
                            </div>
                        </AnimateOnScroll>
                    )) : <div className={`md:col-span-2 lg:col-span-3 text-center py-8 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            <p>Nenhum artigo encontrado para sua busca.</p>
                        </div>}
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default KnowledgeBasePage;
