import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import AnimateOnScroll from './AnimateOnScroll';

const blogPosts = [
  {
    title: 'Como um chatbot no Instagram pode dobrar seus agendamentos',
    category: 'Automação',
    color: 'bg-purple-500/20 text-purple-300',
  },
  {
    title: '3 motivos para sua pequena empresa ter um site profissional em 2025',
    category: 'Presença Digital',
    color: 'bg-teal-500/20 text-teal-300',
  },
  {
    title: "Sua 'Logo' não é sua 'Marca': Entenda a diferença crucial",
    category: 'Identidade Visual',
    color: 'bg-pink-500/20 text-pink-300',
  },
];

const BlogTeaserSection: React.FC = () => {
  return (
    <section className="hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Fique por dentro
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Dicas e estratégias para ajudar sua pequena empresa a crescer no mundo digital.
          </p>
        </AnimateOnScroll>
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimateOnScroll key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="aurora-card p-8 group flex flex-col h-full">
                <div className="flex-grow">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${post.color}`}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                    {post.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="font-semibold text-teal-400 flex items-center mt-4 group-hover:underline"
                >
                  Ler artigo <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-16">
          <AnimateOnScroll>
            <button className="cta-button text-white font-semibold px-8 py-4 text-lg">
              Ver todos os artigos
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaserSection;
