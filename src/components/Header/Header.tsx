import styles from './header.module.scss'
import { FC } from 'react'

interface IHeader {
    todoCount: number
}

export const Header: FC<IHeader> = ({ todoCount }) => {
    return (
            <div className={styles.header}>
                <div className={styles.title}>
                WomanUp
                <span>Список дел</span>
                </div>
                <div className={styles.subTitle}>
                    Запланировано<span>{todoCount}</span>
                    </div>
            </div>
    );
}