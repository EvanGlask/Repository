import styles from './Menu.module.css'

const Menu = ({items, active, menuActive}) => {
    return (
        <div className={active ? styles.menu.active : styles.menu}>
            <div className={styles.content}>
                <ul className={styles.ul}>
                    {items.map(item =>
                     <li className={styles.li}>
                        <a className={styles.a} href={item.href}>{item.value}</a>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;