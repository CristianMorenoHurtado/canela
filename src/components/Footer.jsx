import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer__wrapper">
                        <div className="footer__contact footer__half">
                            <h2 className="footer__title">
                                Contact Information
                            </h2>
                            <h3>ADDRESS: 3 1st St SE, Moultrie, GA 31768</h3>
                            <ul className="nav__links">
                                <li className="nav__list">
                                    <Link to="https://www.facebook.com/CanelaSnackBar" target="_blank" rel="noreferrer" className="nav__link footer__link--first">
                                        <FontAwesomeIcon className="nav__icon" icon={['fab', 'facebook-f']} />
                                    </Link>
                                </li>
                                <li className="nav__list">
                                    <Link to="https://www.instagram.com/canelainc/?hl=en" target="_blank" rel="noreferrer" className="nav__link">
                                        <FontAwesomeIcon className="nav__icon" icon={['fab', 'instagram']} />
                                    </Link>
                                </li>
                                <li className="nav__list">
                                    <Link to="mailto:canela.moultrie@gmail.com" className="nav__link">
                                        <FontAwesomeIcon className="nav__icon" icon="envelope" />
                                    </Link>
                                </li>
                                <li className="nav__list">
                                    <Link to="tel:(229) 999-4123" className="nav__link">
                                        <FontAwesomeIcon className="nav__icon" icon="phone" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__hours footer__half">
                            <h2 className="footer__title">
                                Restaurant Hours
                            </h2>
                            <div className="hours__wrapper">
                                <h3 className="hours">
                                    Monday: 11:00AM - 7:00PM
                                </h3>
                                <h3 className="hours">
                                    Tuesday: 11:00AM - 7:00PM
                                </h3>
                                <h3 className="hours">
                                    Wednesday: 11:00AM - 7:00PM
                                </h3>
                                <h3 className="hours">
                                    Thursday: 11:00AM - 7:00PM
                                </h3>
                                <h3 className="hours">
                                    Friday: 11:00AM - 8:00PM
                                </h3>
                                <h3 className="hours">
                                    Saturday: 11:00AM - 8:00PM
                                </h3>
                                <h3 className="hours">
                                    Sunday: 11:00AM - 7:00PM
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <span>Copyright &copy; 2021 Canela, Inc.</span>
                        <span>Website created by <a href="https://cristianmorenohurtado.github.io/" className="footer__cris" target="_blank" rel="noreferrer">Cristian Moreno</a></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
