import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'


interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation('navbar');
    
    return (
        <div className={classNames (cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    {t('main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    {t('about')}
                </AppLink>
            </div>
        </div>
    );
};
