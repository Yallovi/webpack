import { FC } from 'react'
import { useTranslation } from 'react-i18next'


export const MainPage: FC = () => {
    const { t } = useTranslation('mainPage');
    return <div>
        {t("title")}
    </div>
}

