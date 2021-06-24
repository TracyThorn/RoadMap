import React from 'react'
import "./styles.scss"
import Growth from "../../../assests/growth.png"

function Header() {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={Growth} alt="Growth" />
                </div>
            </div>
        </header>
    )
}

export default Header
