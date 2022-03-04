import React, { Component } from 'react'

import LexiOne from "../../../static/assets/home/lexi-one.jpg"
import LexiTwo from "../../../static/assets/home/lexi-two.jpg"
import LexiThree from "../../../static/assets/home/lexi-three.jpg"
import Example from "../../../static/assets/home/example.jpg"

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="home">

                
                <div className="picture-home">
                    <img src={Example} alt="Example" />

                    <div className="text-on-image">
                        <p>
                            For The carefree & wildly in love
                        </p>
                    </div>
                </div>


                <div className="introduction-wrapper">
                    <div className="introduction">

                        <div className="left-side">

                            <img src={LexiOne} alt="example" />
                            
                        </div>

                        <div className="right-side">

                            <div className="text">
                                <h1>
                                    Hi! I'm Lexi!
                                </h1>

                                <p>
                                    WHO AM I?
                                </p>

                                <p>
                                    I'm a couples, wedding & elopement Photographer based in Salem, OR.
                                </p>

                                <div className="my-story">
                                    <a href="/about">My Story</a>
                                </div>





                            </div>

                        </div>

                    </div>
                </div>


                <div className="quote">

                    <div className="text">

                        <p>
                            My goal with my photography is to invoke true emotion. I want you to feel like you're falling in love with each other all over again.
                        </p>

                    </div>

                </div>

                <div className="get-started-home">

                    <div className="image-get-started-home">

                        <img src={Example} alt="Example" />

                        
                    </div>

                    <div className="text">
                        <p>
                            READY TO GET STARTED?
                        </p>

                        <h1>
                            Let's tell your love story
                        </h1>

                        <a href="/contact">Let's Chat!</a>

                    </div>



                     

                </div>

                <div className="info-home">

                    <div className="info-home-box">

                        <div className="portfolio">

                            <div className="text-portfolio">
                                <a href="/portfolio">Portfolio</a>

                                <p>
                                    View My Work
                                </p>
                            </div>
                            
                        </div>

                        <div className="investments">

                            <div className="text-investments">

                                <a href="/portfolio">Investments</a>


                                    <p>
                                        SEE MY PRICING
                                    </p>

                            </div>
                        </div>

                        <div className="contact">

                            <div className="text-contact">

                                <a href="/portfolio">Contact</a>


                                <p>
                                    BOOK ME
                                </p>

                            </div>
                        </div>

                    </div>

                </div>


                <div className="instagram-home">

                    <div className="instagram-home-box">
                        <div className="left-side">
                            <p>
                                FOLLOW ME ON INSTAGRAM
                            </p>
                        </div>

                        <div className="right-side">
                            <a href="https://www.instagram.com/lexilichtyphotography/">@LEXILICHTYPHOTOGRAPHY</a>
                        </div>
                    </div>



                </div>

                <div className="picture-display-home">

                    <div className="picture-display-home-box">
                        <img src={Example} alt="Example" />
                        <img src={LexiThree} alt="LexiThree" />
                        <img src={Example} alt="Example" />
                        <img src={Example} alt="Example" />
                    </div>

                </div>



                
            </div>
        )
    }
}