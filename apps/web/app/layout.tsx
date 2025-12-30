import { IntlProvider } from '@/i18n/IntlProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
});

export const metadata: Metadata = {
    title: 'AI Agent App',
    description: 'AI Agent App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <IntlProvider>{children}</IntlProvider>
            </body>
        </html>
    );
}
