'use client';

import { Button } from '@/components/ui/button';
import { changeLocale } from 'i18n/changeLocale';
import { useRouter } from 'next/navigation';

const locales = [
    { code: 'en', label: 'EN' },
    { code: 'pl', label: 'PL' },
] as const;

interface LanguageSwitcherProps {
    currentLocale: string;
}

export const LanguageSwitcher = ({ currentLocale }: LanguageSwitcherProps) => {
    const router = useRouter();

    const handleLocaleChange = async (locale: string) => {
        if (locale === currentLocale) return;
        await changeLocale(locale);
        router.refresh();
    };

    return (
        <div className="flex gap-2">
            {locales.map((locale) => (
                <Button
                    key={locale.code}
                    variant={
                        currentLocale === locale.code ? 'secondary' : 'outline'
                    }
                    size="sm"
                    onClick={() => handleLocaleChange(locale.code)}
                >
                    {locale.label}
                </Button>
            ))}
        </div>
    );
};
