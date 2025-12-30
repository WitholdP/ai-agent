'use client';

import { NavBar } from '@/components/nav-bar';

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar />
            <div className="p-4">{children}</div>
        </>
    );
}
