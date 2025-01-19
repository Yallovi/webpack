import { FC, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames'
import { LanguagesSwitcher } from 'widgets/LanguagesSwitcher'

import s from './sidebar.module.scss'
import { useTranslation } from 'react-i18next'


export const Sidebar: FC = () => {
    const { t } = useTranslation('sidebar')
    const [collapsed,setCollapsed] = useState(false)

    const handleToggle = () => setCollapsed(prev => !prev)

    return (
        <div className={classNames(s.sidebar, {[s.collapsed]:collapsed})}>
            <Button onClick={handleToggle}>{t("toggle")}</Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LanguagesSwitcher />
            </div>
        </div>
    )
}
