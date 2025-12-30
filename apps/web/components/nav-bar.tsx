import { LanguageSwitcher } from '@/components/language-switcher';

export const NavBar = () => {
    return (
        <header className="sticky top-0 z-50 flex justify-end items-center p-4 gap-4 h-16 bg-primary">
            <LanguageSwitcher />
        </header>
    );
};
