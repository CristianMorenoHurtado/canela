import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import AboutLogo from "../assets/canela_logo.jpg"
import AboutGarden from '../assets/Garden-img.png'

const AboutUs = () => {
    return (
        <HelmetProvider>
            <div className="container about__container">
                <Helmet>
                    <title>Canela, Inc. | About Us</title>
                </Helmet>
                <div className="about__item--container">
                    <div className="row">
                        <div className="about__item about__item--mobile">
                            <div className="about__description about__half">
                                <h1 className="about__header">
                                    Our Restaurant
                                </h1>
                                <p className="about__para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae laborum exercitationem assumenda dolorum quidem blanditiis ad illo? Ea beatae consequatur quia distinctio! Assumenda, dolore. Nihil ab molestias deleniti voluptas?
                                </p>
                                <p className="about__para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae laborum exercitationem assumenda dolorum quidem blanditiis ad illo? Ea beatae consequatur quia distinctio! Assumenda, dolore. Nihil ab molestias deleniti voluptas?
                                </p>
                            </div>
                            <img src={AboutLogo} className="about__img about__img--logo about__half" alt="" />
                        </div>
                    </div>
                </div>
                <div className="about__item--container">
                    <div className="row">
                        <div className="about__item">
                            <img src={AboutGarden} className="about__img about__img--food about__half" alt="" />
                            <div className="about__description about__half">
                                <h1 className="about__header">
                                    Our Food
                                </h1>
                                <p className="about__para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae laborum exercitationem assumenda dolorum quidem blanditiis ad illo? Ea beatae consequatur quia distinctio! Assumenda, dolore. Nihil ab molestias deleniti voluptas?
                                </p>
                                <p className="about__para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae laborum exercitationem assumenda dolorum quidem blanditiis ad illo? Ea beatae consequatur quia distinctio! Assumenda, dolore. Nihil ab molestias deleniti voluptas?
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </HelmetProvider>
    )
}

export default AboutUs
