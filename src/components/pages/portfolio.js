import React, { Component } from 'react'

import Example from "../../../static/assets/home/example.jpg"

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="portfolio">

                <div className="picture-portfolio">
                    <img src={Example} alt="Example" />

                    <div className="text-on-picture-portfolio">
                        <p>
                            When joy is a habit, love is a reflex
                        </p>
                    </div>
                </div>

                <div className="gallery-one">
                    <div className="gallery-box-one">
                        
                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                    </div>
                </div>

                <div className="gallery-two">
                    <div className="gallery-box-two">

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                        <div className="gallery-image">
                            <img src={Example} alt="Example" />
                        </div>

                    </div>
                </div>

                <div className="info-home">

                    <div className="info-home-box">

                        <div className="portfolio">

                            <div className="text-portfolio">
                                <a href="/about">About</a>

                                <p>
                                    Read My Story
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
                
            </div>
        )
    }
}