import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export const HomePage = () => {
    const t = useTranslations('HomePage');

    return (
        <div>
            <p>{t('title')}</p>
            <Button>Click me</Button>
        </div>
    );
};
