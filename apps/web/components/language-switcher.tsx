'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { DEFAULT_LOCALE, getLocale, locales, setLocale } from '@/i18n/locale';

export const LanguageSwitcher = () => {
    const currentLocale = getLocale();
    const currentLabel =
        locales.find((locale) => locale.code === currentLocale)?.label ||
        DEFAULT_LOCALE;

    return (
        <Select
            value={currentLocale}
            onValueChange={(value) => setLocale(value)}
        >
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
