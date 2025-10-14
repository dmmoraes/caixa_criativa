import React, { useState } from 'react';
import { MessageSquareIcon } from './icons/MessageSquareIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { ClockIcon } from './icons/ClockIcon';
import { SparkleIcon } from './icons/SparkleIcon';
import { useChatbot } from '../contexts/ChatbotContext';

const quizSteps = [
    // Step 0: Main Goal
    {
        question: "Qual é o principal objetivo do seu negócio agora?",
        options: [
            { text: "Vender Mais", icon: <TrendingUpIcon className="h-8 w-8 text-green-500"/>, nextStep: 1 },
            { text: "Economizar Tempo", icon: <ClockIcon className="h-8 w-8 text-blue-500"/>, nextStep: 2 },
            { text: "Parecer Mais Profissional", icon: <SparkleIcon className="h-8 w-8 text-purple-500"/>, nextStep: 3 },
        ]
    },
    // Step 1: Sales Challenge
    {
        question: "O que mais impede você de vender mais?",
        options: [
            { text: "Demoro para responder e perco o cliente", recommendation: "Nossa Automação de Atendimento responde a todos instantaneamente, 24/7. Chega de perder vendas por demora!" },
            { text: "Meu site/perfil não converte visitantes", recommendation: "Criamos Sites e Landing Pages otimizados para atrair e converter visitantes. Vamos colocar sua empresa no mapa digital!" },
            { text: "Não consigo qualificar quem tem real interesse", recommendation: "Com um bot inteligente, você qualifica leads automaticamente, focando apenas em quem está pronto para comprar." },
        ]
    },
    // Step 2: Time Challenge
    {
        question: "Qual tarefa repetitiva consome mais o seu tempo?",
        options: [
            { text: "Responder as mesmas perguntas sempre", recommendation: "Um chatbot com FAQ interativo resolve isso. Seus clientes tiram dúvidas sozinhos, e você foca no que importa." },
            { text: "Agendar horários e confirmar manualmente", recommendation: "Com um bot, seus clientes agendam horários sozinhos, e sua agenda fica sempre organizada e sem conflitos." },
            { text: "Coletar informações iniciais dos clientes", recommendation: "Deixe que um bot colete os dados e necessidades dos seus clientes, entregando tudo organizado para você." },
        ]
    },
     // Step 3: Professionalism Challenge
    {
        question: "O que você sente que mais precisa melhorar na sua imagem online?",
        options: [
            { text: "Minha logo e posts não têm um padrão", recommendation: "Uma Identidade Visual forte e coesa transmite confiança. Vamos criar uma marca que seus clientes não esquecem." },
            { text: "Meu perfil do Instagram parece amador", recommendation: "Uma Bio otimizada e um Link na Bio profissional transformam seu perfil numa máquina de conversão. Vamos começar?" },
            { text: "Não tenho um 'lugar oficial' na internet", recommendation: "Um site profissional é sua vitrine 24h. Ele centraliza suas informações e passa credibilidade para fechar mais negócios." },
        ]
    }
];

const InteractiveQuiz: React.FC = () => {
    const [step, setStep] = useState(0);
    const [history, setHistory] = useState<number[]>([]);
    const [recommendation, setRecommendation] = useState<string | null>(null);
    const [selectedPain, setSelectedPain] = useState('');
    const { openChat } = useChatbot();

    const handleOptionClick = (option: any) => {
        setHistory(prev => [...prev, step]);

        if (option.recommendation) {
            setRecommendation(option.recommendation);
            setSelectedPain(option.text);
            setStep(99); // Final step
        } else {
            setStep(option.nextStep);
        }
    }
    
    const handleBackClick = () => {
        if (history.length > 0) {
            const previousStep = history[history.length - 1];
            setHistory(prev => prev.slice(0, -1));
            setStep(previousStep);
            setRecommendation(null);
            setSelectedPain('');
        }
    }

    const handleRestart = () => {
        setStep(0);
        setHistory([]);
        setRecommendation(null);
        setSelectedPain('');
    }

    const handleChatClick = () => {
        const initialMessage = `Olá! Meu desafio é: "${selectedPain}". A recomendação do diagnóstico foi: "${recommendation}". Podem me ajudar com isso?`;
        openChat(initialMessage);
    }

    const renderStep = () => {
        if (step === 99) {
            return (
                 <div key="recommendation" className="text-center fade-in-up">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Solução Encontrada!</h3>
                    <p className="text-gray-600 mb-6 text-lg">{recommendation}</p>
                    <div className="flex flex-col items-center gap-4">
                        <button onClick={handleChatClick} className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-green-400 text-white font-bold px-8 py-4 rounded-2xl clay-button transform hover:scale-105 text-lg">
                            <span>Conversar sobre a solução</span>
                            <MessageSquareIcon className="h-5 w-5" />
                        </button>
                        <button onClick={handleRestart} className="font-semibold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                             <ArrowLeftIcon className="h-4 w-4" />
                            <span>Refazer Diagnóstico</span>
                        </button>
                    </div>
                 </div>
            )
        }

        const currentStep = quizSteps[step];
        const optionsGridClasses = currentStep.options.length === 3
            ? 'grid-cols-1 lg:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto';


        return (
             <div key={step} className="w-full fade-in-up relative">
                {history.length > 0 && (
                    <button onClick={handleBackClick} className="absolute top-0 left-0 font-semibold text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm p-2 rounded-lg hover:bg-gray-100/50">
                            <ArrowLeftIcon className="h-4 w-4" />
                            <span>Voltar</span>
                    </button>
                )}
                <div className="mb-8 text-center pt-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{currentStep.question}</h3>
                </div>
                <div className={`grid ${optionsGridClasses} gap-4 sm:gap-6`}>
                    {currentStep.options.map((opt, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleOptionClick(opt)} 
                            className="group p-4 sm:p-6 bg-white rounded-2xl clay-shadow text-center transform hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="inline-flex p-3 sm:p-4 rounded-xl bg-gray-100 mb-4 transition-transform group-hover:scale-110">
                                {opt.icon}
                            </div>
                            <p className="font-semibold text-gray-700">{opt.text}</p>
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <section id="interactive-quiz" className="py-16 md:py-24 bg-white/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Descubra o potencial do seu negócio</h2>
                 <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto mb-12">Responda 2 perguntas e encontre a solução ideal em 30 segundos.</p>
                 <div className="p-8 bg-white/80 rounded-3xl clay-card max-w-5xl mx-auto min-h-[250px] flex items-center justify-center">
                    {renderStep()}
                 </div>
            </div>
        </section>
    );
}

export default InteractiveQuiz;