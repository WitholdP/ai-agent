'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { changeLocale } from 'i18n/changeLocale';

const locales = [
    { code: 'en', label: 'EN' },
    { code: 'pl', label: 'PL' },
] as const;

interface LanguageSwitcherProps {
    currentLocale: string;
}

export const LanguageSwitcher = ({ currentLocale }: LanguageSwitcherProps) => {
    const handleLocaleChange = async (locale: string) => {
        if (locale === currentLocale) return;
        await changeLocale(locale);
    };

    const currentLabel =
        locales.find((locale) => locale.code === currentLocale)?.label || 'EN';

    return (
        <Select value={currentLocale} onValueChange={handleLocaleChange}>
            <SelectTrigger className="w-20">
                <SelectValue>{currentLabel}</SelectValue>
            </SelectTrigger>
            <SelectContent>
                {locales.map((locale) => (
                    <SelectItem key={locale.code} value={locale.code}>
                        {locale.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
