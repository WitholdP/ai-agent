export const DEFAULT_LOCALE = 'en';

export const locales = [
    { code: 'en', label: 'EN' },
    { code: 'pl', label: 'PL' },
] as const;

export function getLocale(): string {
    return localStorage.getItem('locale') || DEFAULT_LOCALE;
}

export function setLocale(locale: string) {
    localStorage.setItem('locale', locale);
    window.location.reload(); // simplest way to apply new messages
}
