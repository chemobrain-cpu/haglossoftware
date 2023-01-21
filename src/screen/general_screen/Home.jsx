import React, { useState } from 'react';
import styles from './Home.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

//let { admin} = useSelector(state => state.userAuth)
function Home() {
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
        <>
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

            <Carousel showStatus={false} autoplay={true} interval={3000} showThumbs={false}>
                <div className={styles.carouselCard}>
                    <div className={styles.carouselContent}>
                        <h1>Hi Technology  <span>Tracking</span> Vehicle</h1>
                        <p>We provide always our best services for our clients and always try to achieve our client satisfaction</p>
                        <div className={styles.buttonContainer}>
                            <button>get started</button>

                        </div>



                    </div>
                    <img src='../tracker4.png' />

                </div>
                <div className={styles.carouselCard}>
                    <div className={styles.carouselContent}>
                        <h1>Hi Technology  <span>Tracking</span> Vehicle</h1>
                        <p>We provide always our best services for our clients and always try to achieve our client satisfaction</p>
                        <div className={styles.buttonContainer}>
                            <button>get started</button>

                        </div>



                    </div>
                    <img src='../tracker3.jpg' />

                </div>





            </Carousel>
        </>

    );
}

export default Home;