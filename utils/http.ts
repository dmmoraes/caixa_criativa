export type ApiError = { status: number; message: string };

export async function apiFetch<T = any>(path: string, options: RequestInit = {}): Promise<T> {
  const base = (import.meta as any).env?.VITE_N8N_BASE_URL || '';
  // Prefer Supabase session token if available
  let token: string | null = null;
  try {
    const { supabase } = await import('./supabaseClient');
    const { data } = await supabase.auth.getSession();
    token = data.session?.access_token || null;
  } catch {
    // fallback: no supabase available
  }

  const headers = new Headers(options.headers || {});
  if (token) headers.set('Authorization', `Bearer ${token}`);
  if (!headers.has('Content-Type') && options.body) headers.set('Content-Type', 'application/json');

  const res = await fetch(`${base}${path}`, {
    ...options,
    headers,
    credentials: 'include',
  });

  const contentType = res.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const payload = isJson ? await res.json().catch(() => ({})) : await res.text().catch(() => '');

  if (!res.ok) {
    const message = isJson ? payload?.message || res.statusText : String(payload || res.statusText);
    throw { status: res.status, message } as ApiError;
  }
  return payload as T;
}
