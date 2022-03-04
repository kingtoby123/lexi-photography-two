import React, { Component } from 'react'
import Example from "../../../static/assets/home/example.jpg"


export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="about">

                <div className="introduction">
                    <p>
                        Hey, I'm Lexi!
                    </p>
                </div>

                <div className="first-image-about">
                    <img src={Example} alt="Example" />
                </div>

                <div className="first-text-about">
                    <div className="left-side">
                        <h1>
                            Meet your new bestie
                        </h1>

                    </div>

                    <div className="right-side">
                        <p>
                            Hi! I am so glad you're here! My name is Lexi, and I am a couples, wedding & elopement photographer based in Salem, Oregon. I am a fun loving and candid style photographer that lives for documenting the love between people. I'm all about telling your love story authentically and freezing your moments in time. My main goal is for you to be able to feel what you felt in that moment 20 years from now. I am for the emotional, real and passionate lovers. 
                        </p>
                    </div>
                </div>

                <div className="second-image-about">
                    <img src={Example} alt="Example" />
                </div>

                <div className="second-text-about">
                    <div className="quote">

                        <p>
                            "It was love at first sight, at last sight, at ever and ever sight"
                        </p>
                    </div>

                    <div className="author">
                        <p>
                            Vladimir Nabokov
                        </p>
                    </div>
                </div>


                <div className="info-about">

                    <div className="info-about-box">

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

                <div className="bottom-section-about">
                    <div className="bottom-section-about-box">

                        <div className="heading">
                            <h1>
                                FOLLOW ALONG
                            </h1>
                        </div>

                        <div className="picture-holder-box">


                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                            <div className="picture-holder">
                                <img src={Example} alt="Example" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>




                    

                
        )
    }
}