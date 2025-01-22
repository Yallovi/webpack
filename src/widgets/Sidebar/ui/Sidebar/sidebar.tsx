import { FC, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames'
import { LanguagesSwitcher } from 'widgets/LanguagesSwitcher'
import { useTranslation } from 'react-i18next'

import s from './sidebar.module.scss'


export const Sidebar: FC = () => {
    const { t } = useTranslation('sidebar')
    const [collapsed,setCollapsed] = useState(false)

    const handleToggle = async () => setCollapsed(prev => !prev)

    return (
        <div data-testid="sidebar" className={classNames(s.sidebar, {[s.collapsed]:collapsed})}>
            <Button data-testid="sidebar-toggle" onClick={handleToggle}>{t("toggle")}</Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LanguagesSwitcher />
            </div>
        </div>
    )
}
