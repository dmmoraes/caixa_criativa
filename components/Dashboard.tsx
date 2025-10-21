import React, { useState, lazy, Suspense, useEffect } from 'react';
import DashboardSidebar from './dashboard/DashboardSidebar';
import LoadingSpinner from './LoadingSpinner';
import AnimateOnScroll from './AnimateOnScroll';
import { getServices, getInvoices, getSupportTickets, getKnowledgeBase, createSupportTicket, payInvoice, Service, Invoice, SupportTicket, KnowledgeArticle } from '../utils/api';
import { useTheme } from '../contexts/ThemeContext';

const DashboardOverview = lazy(() => import('./dashboard/DashboardOverview'));
const MyServicesPage = lazy(() => import('./dashboard/MyServicesPage'));
const BillingPage = lazy(() => import('./dashboard/BillingPage'));
const SupportPage = lazy(() => import('./dashboard/SupportPage'));
const NewServicesPage = lazy(() => import('./dashboard/NewServicesPage'));
const KnowledgeBasePage = lazy(() => import('./dashboard/KnowledgeBasePage'));

export type DashboardView = 'overview' | 'services' | 'billing' | 'support' | 'new-services' | 'knowledge-base';

const Dashboard: React.FC = () => {
    const [activeView, setActiveView] = useState<DashboardView>('overview');
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    // Centralized state for all dashboard data
    const [services, setServices] = useState<Service[]>([]);
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [tickets, setTickets] = useState<SupportTicket[]>([]);
    const [articles, setArticles] = useState<KnowledgeArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                setLoading(true);
                const [servicesData, invoicesData, ticketsData, articlesData] = await Promise.all([
                    getServices(),
                    getInvoices(),
                    getSupportTickets(),
                    getKnowledgeBase(),
                ]);
                setServices(servicesData);
                setInvoices(invoicesData);
                setTickets(ticketsData);
                setArticles(articlesData);
                setError(null);
            } catch {
                setError("Falha ao carregar os dados do painel. Por favor, tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, []);

    // Handlers to modify centralized state using the "action and refetch" pattern
    const handlePayInvoice = async (invoiceId: string) => {
        try {
            await payInvoice(invoiceId); // 1. Perform the action
            const freshInvoices = await getInvoices(); // 2. Refetch the data from the source of truth
            setInvoices(freshInvoices); // 3. Update the UI state
        } catch (err) {
            console.error("Failed to pay invoice:", err);
        }
    };

    const handleCreateTicket = async (formData: { subject: string; service: string; message: string }) => {
        try {
            await createSupportTicket(formData); // 1. Perform the action
            const freshTickets = await getSupportTickets(); // 2. Refetch the data
            setTickets(freshTickets); // 3. Update the UI state
        } catch (error) {
            console.error("Failed to create ticket:", error);
            throw error; // Re-throw to let the form handle submit status
        }
    };

    const renderContent = () => {
        if (loading) {
            return <div className="flex h-96 items-center justify-center"><LoadingSpinner /></div>;
        }
        if (error) {
            return <div className="aurora-card p-8 text-center text-red-400">{error}</div>;
        }

        switch (activeView) {
            case 'overview':
                return <DashboardOverview setActiveView={setActiveView} services={services} invoices={invoices} />;
            case 'services':
                return <MyServicesPage services={services} />;
            case 'billing':
                return <BillingPage invoices={invoices} onPayInvoice={handlePayInvoice} />;
            case 'support':
                return <SupportPage tickets={tickets} onCreateTicket={handleCreateTicket} />;
            case 'new-services':
                return <NewServicesPage />;
            case 'knowledge-base':
                return <KnowledgeBasePage articles={articles} />;
            default:
                return <DashboardOverview setActiveView={setActiveView} services={services} invoices={invoices} />;
        }
    };

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <AnimateOnScroll>
                    <div className="mb-10">
                        <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Painel do Cliente</h1>
                        <p className={`text-lg mt-2 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Bem-vindo de volta!</p>
                    </div>
                </AnimateOnScroll>
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <DashboardSidebar activeView={activeView} setActiveView={setActiveView} />
                    <main className="lg:col-span-9 xl:col-span-10 mt-8 lg:mt-0">
                        <Suspense fallback={<div className="flex h-96 items-center justify-center"><LoadingSpinner /></div>}>
                            {renderContent()}
                        </Suspense>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
