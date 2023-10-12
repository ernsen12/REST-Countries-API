import React from "react"

export default function searchbar(props) {
    const darkelement = props.dark ? " darkelement" : "";

    const selectElements = props.continents.map(elem => {
        return(
            <option 
                value={elem} 
                key={elem} 
                className={darkelement}
            >
            {elem}
            </option>
        )
    })

    return(
        <section className={props.dark ? "darkbackground" : ""}>
            <form className="form" onSubmit={props.handleSubmit}>
                <div className={`searchBar${darkelement}`}>
                    <div className="searchLogo--container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="searchLogo">
                        <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke={props.dark ? "white" : "grey"} strokeMiterlimit="10" strokeWidth="32"/>
                        <path fill="none" stroke={props.dark ? "white" : "grey"} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/>
                    </svg>
                    </div>
                    <input 
                        className={`search${darkelement}`}
                        onChange={props.handleSearch}
                        type="search"
                        placeholder="Search for a country..."
                        name="search"
                    />
                </div>
                
                <select className={`sort${darkelement}`} name="region" onChange={props.handleSort}>
                    {selectElements}
                </select>
            </form>
        </section>
    )
}