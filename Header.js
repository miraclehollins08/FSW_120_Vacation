import React, { Component } from "react"

export default class Header extends Component {
    render () {
        return (
            <div className = "Header">
                <ul>
                <li> <a href="Home">Home</a></li>
                <li> <a href="Contact">Contact</a></li>
                    <li> <a href="About">About</a></li>
                    <li> <a href="Enter">Enter</a></li>
                </ul>
            </div>
        );
    }
}