
import { useTranslations } from 'next-intl';

export function ProfileHeader() {
    const t = useTranslations('Profile');
    return (
        <div className="flex flex-col items-center mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
                {t('name')}
            </h1>
            <p className="text-base md:text-lg  text-primary mt-3">
                {t('title')}
            </p>
        </div>
    )
}