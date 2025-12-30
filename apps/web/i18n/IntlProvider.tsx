'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

import { DEFAULT_LOCALE, getLocale } from './locale';

export function IntlProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState(DEFAULT_LOCALE);
    const [messages, setMessages] = useState<unknown>(null);

    useEffect(() => {
        const l = getLocale();

        setLocale(l);

        import(`../messages/${l}.json`).then((m) => setMessages(m.default));
    }, []);

    if (!messages) return null; // or a splash screen

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
