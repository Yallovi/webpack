import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

export const LanguagesSwitcher: FC = () => {
    const { t, i18n } = useTranslation('sidebar');

    const handleToggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	
    return <Button onClick={handleToggle}>{t('langSwitcher')}</Button>
}
