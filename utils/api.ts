import { apiFetch } from './http';

export interface Service {
    name: string;
    status: 'Ativo' | 'Em Desenvolvimento' | 'Concluído' | string;
    progress: number;
    startDate?: string;
    endDate?: string;
    stages?: { name: string; completed: boolean }[];
    metrics?: { name: string; value: string }[];
    files?: { name: string; link: string }[];
}

export interface Invoice {
    id: string;
    date: string;
    service?: string;
    amount: string; // backend pode já retornar formatado
    status: 'Pendente' | 'Paga' | 'Atrasada';
}

export interface SupportTicket {
    id: string;
    subject: string;
    status: string;
    lastUpdate: string;
    history: { author: 'Você' | 'Equipe de Suporte'; message: string; timestamp: string }[];
}

export interface KnowledgeArticle {
    category: string;
    title: string;
    description: string;
    slug: string; // for the link
}

// --- API Service Definitions (n8n) ---
export const getServices = () => apiFetch<Service[]>('/services');
export const getInvoices = () => apiFetch<Invoice[]>('/invoices');
export const getSupportTickets = () => apiFetch<SupportTicket[]>('/tickets');
export const getKnowledgeBase = () => apiFetch<KnowledgeArticle[]>('/articles');

export const createSupportTicket = (
  data: { subject: string; service: string; message: string }
) => apiFetch<void>('/tickets', { method: 'POST', body: JSON.stringify(data) });

export const payInvoice = (invoiceId: string) =>
  apiFetch<void>(`/invoices/${encodeURIComponent(invoiceId)}/pay`, { method: 'POST' });
