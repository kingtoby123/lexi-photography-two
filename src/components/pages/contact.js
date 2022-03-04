import React, { Component } from 'react'

import Example from "../../../static/assets/home/example.jpg"
import LexiThree from "../../../static/assets/home/lexi-three.jpg"


export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="contact">

                <div className="picture-container-contact">
                    <img src={LexiThree} alt="Example" />

                    <div className="text-picture-contact">
                            Book Me!
                    </div>

                </div>

                <div className="wrapper">

                    <div className="inner-box">
                        <div className="left-side">

                            <h1>
                                Let's work together!
                            </h1>

                            <p>
                                Please fill out my contact form and I will be in touch with you within 48-72 hours! I am so looking forward to getting to know you!
                            </p>
                            
                        </div>

                        <div className="right-side">

                            <div className="input">

                                

                                <div className="name">
                                    <h1>

                                        NAME*
                                    </h1>
                                    <input type="text" />
                                    
                                </div>

                                <div className="email">
                                    <h1>
                                        EMAIL ADDRESS*

                                    </h1>

                                    <input type="text" />

                                </div>
                                <div className="message">

                                    <h1>

                                        MESSAGE*
                                    </h1>

                                    <input type="text" />


                                </div>

                                <div className="button-contact">

                                    <button>SEND MESSAGE</button>
                                </div>


                            </div>


                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}