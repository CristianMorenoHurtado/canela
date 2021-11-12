import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'


const Contact = () => {
    function ContactUs(e) {
        e.preventDefault()

        alert(
            'The email service is temporarily unavailable. Please contact me directly on canela.moultrie@gmail.com'
        )

    }

    return (
        <HelmetProvider>
            <div className="container">
                <Helmet>
                    <title>Canela, Inc. | Contact</title>
                </Helmet>
                <div className="row">
                    <div className="contact__wrapper">
                        <div className="contact">
                            <h1 className="contact__header">
                                Contact Us
                            </h1>
                            <p className="contact__para contact__item">
                                A modern snackbar with a wide, internationally inspired menu. Incredible Shakes and Smoothies, Sandwiches, and Desserts. You will love our selection!
                            </p>
                            <span className="contact__address contact__item">
                                ADDRESS: 3 1st St SE, Moultrie, GA 31768
                            </span>
                            <span className="contact__booking contact__item">
                                FOR BOOKING: (229)999-4123
                            </span>
                            <div className="contact__social--wrapper">
                                <span className="contact__socials">
                                    FOLLOW US ON:
                                </span>
                                <ul className="nav__links">
                                    <li className="nav__list">
                                        <a href="https://www.facebook.com/CanelaSnackBar" rel="noreferrer" target="_blank" className="nav__link contact__link">
                                            <FontAwesomeIcon className="contact__icon" icon={['fab', 'facebook-f']} />
                                        </a>
                                    </li>
                                    <li className="nav__list">
                                        <a href="https://www.instagram.com/canelainc/?hl=en" rel="noreferrer" target="_blank" className="nav__link contact__link">
                                            <FontAwesomeIcon className="contact__icon" icon={['fab', 'instagram']} />
                                        </a>
                                    </li>
                                    <li className="nav__list">
                                        <a href="mailto:canela.moultrie@gmail.com" className="nav__link contact__link">
                                            <FontAwesomeIcon className="contact__icon" icon="envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact">
                            <form className="contact__form" onSubmit={ContactUs} >
                                <div className="contact__name--wrapper">
                                    <input type="text" className="form__input contact__name" name="user_name" required placeholder="Your Name" />
                                    <input type="email" className="form__input contact__name" name="user_email" required placeholder="Your Email" />
                                </div>
                                <textarea name="message" className="form__input" type="text" required placeholder="Your message" ></textarea>
                                <button className="form__submit" id="contact__submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="map__wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d4827.400449584481!2d-83.78887918372386!3d31.179491164519654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d31.179817!2d-83.78744999999999!5e0!3m2!1sen!2sus!4v1636599033685!5m2!1sen!2sus" className="contact__map" title="map_location" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Contact
