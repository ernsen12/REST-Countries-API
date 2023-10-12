import React from "react"

export default function Header(props) {
    return(
        <header className={`header${props.dark ? " darkelement" : ""}`}>
            <h4>Where in the world?</h4>
            <div className="darkmode--toggle" onClick={props.darkMode}>
                <img className="darkmode--logo" src={props.dark ?  "./images/sunny-outline.svg" : "./images/moon-outline.svg"}/>
                <p className={`darkmode--title`}>{props.dark ? "Light Mode" : "Dark Mode"}</p>
            </div>
        </header>
    )
}