import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Landing = () => {
    return (
        <HelmetProvider>
            <div className="container">
                <Helmet>
                    <title>Canela, Inc. | Home</title>
                </Helmet>
                <a href="#topOfPage">
                    <FontAwesomeIcon icon="arrow-up" className="arrow" />
                </a>
                <div className="row menu__icons--row">
                    <div className="menu__wrapper" >
                        <div className="landing__img--effect landing__img--treat" >
                            <a href="#treats" className="menu__link">
                                <h2 className="landing__img--title">
                                    Treats
                                </h2>
                            </a>
                        </div>
                        <div className="landing__img--effect landing__img--snack" >
                            <a href="#snacks" className="menu__link">
                                <h2 className="landing__img--title">
                                    Snacks
                                </h2>
                            </a>
                        </div>
                        <div className="landing__img--effect landing__img--smoothie" >
                            <a href="#smoothies" className="menu__link">
                                <h2 className="landing__img--title">
                                    Smoothies
                                </h2>
                            </a>
                        </div>
                        <div className="landing__img--effect landing__img--shake" >
                            <a href="#shakes" className="menu__link">
                                <h2 className="landing__img--title">
                                    Shakes
                                </h2>
                            </a>
                        </div>
                        <div className="landing__img--effect landing__img--sandwich" >
                            <a href="#sandwiches" className="menu__link">
                                <h2 className="landing__img--title">
                                    Sandwiches
                                </h2>
                            </a>
                        </div>
                        <div className="landing__img--effect landing__img--pockets" >
                            <a href="#pockets" className="menu__link">
                                <h2 className="landing__img--title">
                                    Pockets
                                </h2>
                            </a>
                        </div>
                        <div className="landing__img--effect landing__img--garden" >
                            <a href="#garden" className="menu__link">
                                <h2 className="landing__img--title">
                                    Garden
                                </h2>
                            </a>
                        </div>
                        <div className="landing__img--effect landing__img--sides" >
                            <a href="#sides" className="menu__link">
                                <h2 className="landing__img--title">
                                    Sides
                                </h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="menu__item--container" id="treats">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Treats
                        </h1>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Chile Fruit Bowls
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $5.00
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Canela Sundae
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $5.00
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Yougurt Parfait
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $5.00
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Banana Split
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $5.00
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="menu__item--container" id="snacks">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Snacks
                        </h1>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Loaded Nachos
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.25 | $9.25
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Nacho chips loaded with cheese, meat, tomato, onions, corn, and sour cream.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Loaded Caribe
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.99 | $9.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Plantain chips loaded with steak, queso, corn, tomato, cabbage, and chimi sauce.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Cheesey Nachos
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.25 | $5.50
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Classic nachos with nacho cheese or queso blanco ($1.99).
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Platanitos
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $5.75 | $6.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Plantain chips topped with queso blanco and chimi sauce.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Esquite
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $3.50 | $4.50
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Street corn in a cup; corn, mayo, fresh mexican cheese, and spices.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Dip n Pita
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.75 | $6.00
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Charred pita bread and your dip of choice.
                        </p>
                    </div>
                </div>
                <div className="menu__item--container" id="smoothies">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Smoothies
                        </h1>
                        <h2 className="menu__item--sub-header">The Classics</h2>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Banana Caramel
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.25 | $4.75 | $5.25
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Banana, salted caramel, milk.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Berry Blend
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.25 | $4.75 | $5.25
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Strawberry, blueberry, blackberry.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Limonade Swirl
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.25 | $4.75 | $5.25
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Lemonade, strawberry, blueberry.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Piña Colada
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.25 | $4.75 | $5.25
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Pineapple, coconut.
                        </p>
                        <h2 className="menu__item--sub-header">The Exotic</h2>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Melon Love
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.75 | $5.50 | $5.95
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Cantaloupe, mango, honey, milk.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Guava Punch
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.75 | $5.50 | $5.95
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Guava, strawberry, banana
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Mangonada
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.75 | $5.50 | $5.95
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Mango, chamoy, tamarind, tajin.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Mango Slide
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.75 | $5.50 | $5.95
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Mango, banana, pineapple
                        </p>
                        <h2 className="menu__item--sub-header">The Hearty</h2>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Ginger Green - Muscle Repair
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.00 | $6.50 | $6.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Pineapple, ginger, spinach, honey.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Sweet Chia Detox - Metabolism
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.00 | $6.50 | $6.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Spinach, pineapple, chia, banana, almond.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Matcha Tropical - Antioxidant
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.00 | $6.50 | $6.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Matcha tea, banana, coconut, honey.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Citrus Sunshine - Immune
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.00 | $6.50 | $6.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Pineapple, lime, mango, coconut, orange
                        </p>
                    </div>
                </div>
                <div className="menu__item--container" id="shakes">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Shakes
                        </h1>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Banana-Rama
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Choco Attack
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                PB&J
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Blueberry Cheesecake
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Cookies & Cream
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Pecan Praline
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Canela Special
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Minty Mocha
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Strawberry Banana
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Capuccino
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Nutty Pistachio
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Vanilla Bean
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $6.50 | $7.00 | $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                    </div>
                </div>
                <div className="menu__item--container" id="sandwiches">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Sandwiches
                        </h1>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Tripleta
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                Half $5.99 | Full $7.75
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Steak, pork and ham, secret hot sauce, swiss cheese, lettuce, and mayo.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Chicken Torta
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                Half $5.50 | Full $7.25
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Fajita style chicken, lettuce, cheese, beans, tomatoes, jalapeños, and guac.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Meltdown Cheese Steak
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                Half $5.75 | Full $7.50
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Steak, povolone, mozarella and american cheese.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Havana
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                Half $6.25 | Full $7.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Ham, pork, swiss cheese, lettuce, pickles, mayo, and mustard.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Chimi Steak
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                Half $6.25 | Full $7.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Steak smotheredin Dominican chimi sauce, cabbage, tomato, and onions.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Ham and Cheese
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                Half $4.99 | Full $5.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            The classic ham and cheese sandwich, buttered and toasted.
                        </p>
                    </div>
                </div>
                <div className="menu__item--container" id="pockets">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Pockets
                        </h1>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Chicken Pesto
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.99 | 2 for $11.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Chicken, spinach, quinoa, pesto sauce.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Greek Pork
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.99 | 2 for $11.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Pork, tzatziki sauce, feta cheese, onion, tomato.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Tahini Chicken
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.99 | 2 for $11.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Chicken, tomato, onion, feta cheese, tahini sauce.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Spicy Fiesta
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.99 | 2 for $11.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Ground beef, iceburg, beans, fiesta cheese, onion, jalapeños.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Veggie
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.99 | 2 for $11.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Quinoa, iceburg, romaine, cabbage, tomato, onions, corn, guac, dressing.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Carnivore
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $7.99 | 2 for $11.99
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Steak, chicken, pork, ham, barbacoa sauce.
                        </p>
                    </div>
                </div>
                <div className="menu__item--container" id="garden">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Garden
                        </h1>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                RomanoBowl
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $9.25
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Romaine, iceburg, chicken,tomato, crutons, italian dressing.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Quinoa Fiesta
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $9.50
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Quinoa, iceburg, fresco cheese, corn, beans, salsa, guac, tortilla strips.
                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Middle East
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $9.75
                            </h2>
                        </div>
                        <p className="menu__item--para">
                            Romaine, quinoa, olives, corn, carrots, onion, tahini sauce.
                        </p>
                    </div>
                </div>
                <div className="menu__item--container" id="sides">
                    <div className="row">
                        <h1 className="menu__item--header">
                            Sides and Dips
                        </h1>
                        <h2 className="menu__item--sub-header">Add Sides</h2>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Creamy Chipotle
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $0.00
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Chips and Salsa
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $0.50
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Esquite
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $0.75
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Salad
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $0.75
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Plantain Chips
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $0.99
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Buttered Pita
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $0.99
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <h2 className="menu__item--sub-header">Dips</h2>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Nacho Cheese
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $2.99
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Beefy Cheese
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.99
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Queso Blanco
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $3.99
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Spinach and Artichoke
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $3.99
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                        <div className="menu__item--wrapper">
                            <h2 className="menu__item">
                                Creamy Pesto
                            </h2>
                            <div className="food__line"></div>
                            <h2 className="menu__item--price">
                                $4.99
                            </h2>
                        </div>
                        <p className="menu__item--para">

                        </p>
                    </div>
                </div>
            </div >
        </HelmetProvider>
    )
}

export default Landing
