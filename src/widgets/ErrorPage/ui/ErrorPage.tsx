import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';
import { classNames } from 'shared/lib/classNames'

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation("common");

    const reloadPage = () => {
         
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('commonError')}</p>
            <Button onClick={reloadPage}>
                {t('reloadPage')}
            </Button>
        </div>
    );
};
