import React, { Component, useState } from 'react'

export default function Navigation(props) {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen (prev => !prev)
    }

    return (
        <div className="navigation">
            <div className="name">

                {/* <a href="/">Lexi Lichty Photography</a> */}

            </div>

            <div className="nav-bar"> 

                <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>

                <ul className={`menuNav ${navbarOpen ? " showMenu": ""}`}>\
                
                    <div className="menu-nav-wrapper">
                        <div className="text">

                            <div className="home">

                                <a href="/">Home</a>

                            </div>
                            
                            <div className="about">
                                <a href="/about">About</a>
                                
                            </div>

                            <div className="portfolio">
                                <a href="/portfolio">Portfolio</a>
                                
                            </div>

                            <div className="investments">
                                <a href="/investments">Investments</a>
                                
                            </div>

                            <div className="contact">
                                <a href="/contact">Contact</a>
                                
                            </div>

                        </div>
                    </div>
                
                </ul>

            </div>
            
        </div>
    )
}