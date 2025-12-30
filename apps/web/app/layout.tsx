import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
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
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            <NextIntlClientProvider>
                <html lang="en">
                    <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    >
                        {children}
                    </body>
                </html>
            </NextIntlClientProvider>
        </ClerkProvider>
    );
}
