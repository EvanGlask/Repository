import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.fixed}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <span className={styles.logo}>Justice</span>
                    <div className={styles.btns}>
                        <button>Главная</button>
                        <button>Список</button>
                        <button>Друзья</button>
                        <button>Контакты</button>
                    </div>
                </div>
                <hr/>
                <div className={styles.bot}>
                    <span> © 2021 Justice-team. All rights reserved.</span>
                    <div className={styles.right}>
                        <span>Terms & conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer