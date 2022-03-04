import React, { Component } from 'react'
import Example from "../../../static/assets/home/example.jpg"
import LexiOne from "../../../static/assets/home/lexi-one.jpg"
import LexiThree from "../../../static/assets/home/lexi-three.jpg"
// import LexiThree from "../../../static/assets/home/lexi-three.jpg"



export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-box">
                    <img src={Example} alt="Example" />
                    <img src={LexiThree} alt="LexiThree" />
                    <img src={Example} alt="Example" />
                    <img src={Example} alt="Example" />

                    <img src={LexiOne} alt="LexiOne" />

                    <img src={Example} alt="Example" />
                    <img src={Example} alt="Example" />
                </div>

                <div className="nav-link-container">

                
                    <div className="nav-links">
                        <a href="/">HOME</a>
                        <a href="/about">ABOUT</a>
                        <a href="/portfolio">PORTFOLIO</a>
                        <a href="/investments">INVESTMENTS</a>
                        <a href="/contact">CONTACT</a>
                    </div>

                    <div className="icon">
                        <div className="instagram-icon">
                            <a href="https://www.instagram.com/lexilichtyphotography/">Instagram</a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}