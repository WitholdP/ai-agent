'use client';

import { NavBar } from '@/components/nav-bar';
import { Protected } from '@/components/protected';

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Protected>
            <div>
                <NavBar />
                <div className="p-4">{children}</div>
            </div>
        </Protected>
    );
}
