import React, { useState } from 'react';
import styles from './Home.module.css';

//let { admin} = useSelector(state => state.userAuth)
function Navigation() {
    let [isMobile, setIsMobile] = useState(false)
    let [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
    window.addEventListener('resize', () => {
        if (Number(window.innerWidth) < 750) {
            setIsMobile(true)
            //
        } else {
            //
            setIsMobile(false)
            setIsShowMobileMenu(false)
        }
    })

    let showMobileMenu = () => {

        if (isShowMobileMenu === true) {
            setIsShowMobileMenu(false)
            setIsMobile(false)

        } else {
            setIsMobile(true)

            setIsShowMobileMenu(true)

        }
    }

    return (
        <div className={styles.navContainer}>
            <div className={styles.contact}>
                <div className={styles.leftContact}>
                    <ul className={styles.leftList}>
                        <li> <span className='material-icons'>phone</span>(234) 0200 17813

                        </li>
                        <li> <span className='material-icons'>add_location</span> 95 South Park Ave, USA

                        </li>
                        <li> <span className='material-icons'>email</span> info@buildpower.com

                        </li>



                    </ul>

                </div>

                <div className={styles.rightContact}>
                    <ul className={styles.rightList}>

                        <li> <span className='material-icons'>login</span>Login

                        </li>
                        <li> <span className='material-icons'>person</span>Register

                        </li>
                        <li><span className='material-icons'>facebook</span> facebook

                        </li>



                    </ul>

                </div>

            </div>

            <div className={styles.navigation}>
                <div className={styles.logoContainer}>
                    <h1>LOGO</h1>

                </div>
                <div className={styles.menu} onClick={showMobileMenu}>
                    <span className='material-icons'>menu</span>
                </div>

                <div className={styles.menuContainer}>
                    <ul>
                        <li> HOME</li>
                        <li>CONTACT US</li>
                        <li> LOGIN</li>
                    </ul>

                </div>

            </div>

            {isShowMobileMenu ? <div className={isMobile || isShowMobileMenu ? styles.navigationMobile : styles.mobileHideide}>
                <ul>
                    <li> Home</li>
                    <li>Contact Us</li>
                    <li> Login</li>
                </ul>

            </div> : <></>}






        </div>

    );
}

export default Navigation;