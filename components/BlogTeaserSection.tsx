import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import AnimateOnScroll from './AnimateOnScroll';

const blogPosts = [
    {
        title: "Como um chatbot no Instagram pode dobrar seus agendamentos",
        category: "Automação",
        color: "bg-purple-100 text-purple-800",
    },
    {
        title: "3 motivos para sua pequena empresa ter um site profissional em 2025",
        category: "Presença Digital",
        color: "bg-blue-100 text-blue-800",
    },
    {
        title: "Sua 'Logo' não é sua 'Marca': Entenda a diferença crucial",
        category: "Identidade Visual",
        color: "bg-pink-100 text-pink-800",
    }
]

const BlogTeaserSection: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
            <div className="max-w-7xl mx-auto">
                <AnimateOnScroll className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Fique por dentro
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Dicas e estratégias para ajudar sua pequena empresa a crescer no mundo digital.
                    </p>
                </AnimateOnScroll>
                <div className="grid lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="clay-card p-8 group flex flex-col h-full">
                                <div className="flex-grow">
                                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${post.color}`}>
                                        {post.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h3>
                                </div>
                                 <a href="#" className="font-semibold text-blue-600 flex items-center mt-4 group-hover:underline">
                                    Ler artigo <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
                 <div className="text-center mt-16">
                    <AnimateOnScroll>
                        <button className="clay-button bg-gradient-to-br from-blue-400 to-blue-500 text-white font-semibold px-8 py-4 text-lg">
                            Ver todos os artigos
                        </button>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default BlogTeaserSection;