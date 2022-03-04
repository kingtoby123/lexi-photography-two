import React, { Component } from 'react'

import Example from "../../../static/assets/home/example.jpg"


export default class Investments extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="investments">

                <div className="picture-container-investments">
                    <img src={Example} alt="Example" />

                    <div className="text-picture-investments">
                            Investment
                    </div>

                </div>

                <div className="options-wrapper">
                    <div className="options-box">
                        <div className="left-side">
                            
                        </div>

                        <div className="right-side">

                        </div>

                    </div>
                </div>



                <div className="question-wrapper">
                    <div className="question-box">

                        <div className="heading">
                            <h1>
                                FAQ
                            </h1>
                        </div>

                        <div className="questions">

                            <div className="text">
                                <h1>
                                    How do I book a shoot?
                                </h1>
                                <p>
                                    Fill out my contact form and I will be in touch within 48-72 hours.
                                </p>
                            </div>

                            <div className="text">
                                <h1>
                                    Do you offer payment plans?
                                </h1>
                                <p>
                                    Payment plans are available for my Wedding and Elopement packages. Contact me for more info.
                                </p>
                            </div>

                            <div className="text">
                                <h1>
                                    Do you travel?
                                </h1>
                                <p>
                                    I would love to travel! I do have travel fees for locations greater than 50 miles from Salem, OR. Contact me for more info.
                                </p>
                            </div>

                            <div className="text">
                                <h1>
                                    What payment methods are available?
                                </h1>
                                <p>
                                    Currently I accept Cash App, Venmo, Cash, and Checks.
                                </p>
                            </div>

                            <div className="text">
                                <h1>
                                    Do you have a referral program?
                                </h1>
                                <p>
                                    Absolutely! For every client you refer that books with me it is $20 off your next session.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                


                
            </div>
        )
    }
}