import React, { useState } from 'react';
import './Navigation.css';

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




    window.addEventListener("scroll", function () {
        const navigation = document.querySelector(".navigation")
        const contact = document.querySelector(".contact")
        if (window.scrollY > 200) {
            navigation.style.backgroundColor = 'rgb(20, 40, 56)   '
            contact.style.display='none'


        } else {
            navigation.style.backgroundColor = 'rgb(20, 40, 56)   '
            if (Number(window.innerWidth) < 750) {
                return
            }
            contact.style.display='flex'
            

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
        <div className='navContainer'>
            <div className='contact'>
                <div className='leftContact'>
                    <ul className='leftList'>
                        <li> <span className='material-icons'>phone</span>(234) 0200 17813

                        </li>
                        <li> <span className='material-icons'>add_location</span> 95 South Park Ave, USA

                        </li>
                        <li> <span className='material-icons'>email</span> info@buildpower.com

                        </li>



                    </ul>

                </div>

                <div className='rightContact'>
                    <ul className='rightList'>

                        <li> <span className='material-icons'>login</span>Login

                        </li>
                        <li> <span className='material-icons'>person</span>Register

                        </li>
                        <li><span className='material-icons'>facebook</span> facebook

                        </li>



                    </ul>

                </div>

            </div>

            <div className='navigation'>
                <div className='logoContainer'>
                    <h1>LOGO</h1>

                </div>
                <div className='menu' onClick={showMobileMenu}>
                    <span className='material-icons'>menu</span>
                </div>

                <div className='menuContainer'>
                    <ul>
                        <li> HOME</li>
                        <li>CONTACT US</li>
                        <li> LOGIN</li>
                    </ul>

                </div>

            </div>

            {isShowMobileMenu ? <div className={isMobile || isShowMobileMenu ? 'navigationMobile' : 'mobileHideide'}>
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