import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './notFound.module.scss'

export const NotFoundPage: FC = () => {
    const {t} = useTranslation("common")
    return <div className={s.notFoundPage}>{t("notFound")}</div>
}
