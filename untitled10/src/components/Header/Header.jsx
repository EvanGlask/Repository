import styles from './Header.module.css';
import Menu from "../Menu/Menu";
import { ReactComponent as Bell } from '../icons/Bell.svg';
import { ReactComponent as Profile } from '../icons/Profile.svg';
import {useState} from "react";
const Header = () => {
    const items = [
        {value:'Главная', href: '/main'},
        {value:'Список', href: '/list'},
        {value:'Друзья', href: '/friends'},
        {value:'Контакты', href: '/contact'},
        {value:'Уведомления', href: '/notif'},
        {value:'Профиль', href: '/profile'},
        {value:'Выход', href: '/exit'}
    ]

    const [menuActive, setMenuActive] = useState(false);

    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    }

    return(
        <div className={styles.fixed}>
            <div className={styles.container}>
                <span className={styles.logo}>Justice</span>
                 <div onClick={() =>{
                     handleToggle()
                     setMenuActive(!menuActive)
                 }} className={isActive ? styles.burger1 : styles.burger}>
                     <span></span>
                     <span></span>
                     <span></span>
                 </div>
                <div className={styles.btnCont}>
                    <div className={styles.btnLeft}>
                        <button>Главная</button>
                        <button className={styles.listBtn}>Список</button>
                        <button>Друзья</button>
                        <button>Контакты</button>
                    </div>
                    <div className={styles.btnRight}>
                        <button className={styles.exitBtn}>Выйти</button>
                        <Bell className={styles.bellBtn}/>
                        <div className={styles.profileBtn1}>
                        <Profile className={styles.profileBtn}/>
                        </div>
                    </div>
                </div>
             </div>
            <Menu active={menuActive}
                  setActive={setMenuActive}
                  className={styles.menu}
                  items={items}/>
        </div>
    )
}

export default Header