import { LanguageSwitcher } from '@/components/language-switcher';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { cookies } from 'next/headers';

export const NavBar = async () => {
    const cookieStore = await cookies();
    const currentLocale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

    return (
        <header className="sticky top-0 z-50 flex justify-end items-center p-4 gap-4 h-16 bg-primary">
            <LanguageSwitcher currentLocale={currentLocale} />
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    );
};
