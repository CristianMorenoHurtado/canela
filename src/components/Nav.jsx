
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import CanelaLogo from '../assets/canela_logo.png'

const Nav = () => {
    function openMenu() {
        document.body.classList += ' menu--open'
    }
    function closeMenu() {
        document.body.classList.remove('menu--open')
    }

    return (
        <nav>
            <div className="nav__container" id="topOfPage">
                <Link to="/">
                    <img src={CanelaLogo} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <Link to="/about-us" className="nav__link">
                        About Us
                    </Link>
                    <Link to="/contact" className="nav__link">
                        Contact
                    </Link>
                </ul>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="https://www.facebook.com/CanelaSnackBar" rel="noreferrer" target="_blank" className="nav__link">
                            <FontAwesomeIcon className="nav__icon" icon={['fab', 'facebook-f']} />
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="https://www.instagram.com/canelainc/?hl=en" rel="noreferrer" target="_blank" className="nav__link">
                            <FontAwesomeIcon className="nav__icon" icon={['fab', 'instagram']} />
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="mailto:canela.moultrie@gmail.com" className="nav__link">
                            <FontAwesomeIcon className="nav__icon" icon="envelope" />
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="tel:(229) 999-4123" className="nav__link">
                            <FontAwesomeIcon className="nav__icon" icon="phone" />
                        </a>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="nav__links--menu">
                        <li className="nav__list--menu">
                            <a href="https://www.facebook.com/CanelaSnackBar" rel="noreferrer" target="_blank" className="nav__link--menu">
                                <FontAwesomeIcon className="nav__icon" icon={['fab', 'facebook-f']} />
                            </a>
                        </li>
                        <li className="nav__list--menu">
                            <a href="https://www.instagram.com/canelainc/?hl=en" rel="noreferrer" target="_blank" className="nav__link--menu">
                                <FontAwesomeIcon className="nav__icon" icon={['fab', 'instagram']} />
                            </a>
                        </li>
                        <li className="nav__list--menu">
                            <a href="mailto:canela.moultrie@gmail.com" className="nav__link--menu">
                                <FontAwesomeIcon className="nav__icon" icon="envelope" />
                            </a>
                        </li>
                        <li className="nav__list--menu">
                            <a href="tel:(229) 999-4123" className="nav__link--menu">
                                <FontAwesomeIcon className="nav__icon" icon="phone" />
                            </a>
                        </li>
                    </ul>
                    <ul className="menu__links" onClick={closeMenu}>
                        <li className="menu__list">
                            <Link to="/" className="menu__link">
                                Home
                            </Link>
                        </li>
                        <li className="menu__list" onClick={closeMenu}>
                            <Link to="/about-us" className="menu__link">
                                About Us
                            </Link>
                        </li>
                        <li className="menu__list" onClick={closeMenu}>
                            <Link to="/contact" className="menu__link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Nav
