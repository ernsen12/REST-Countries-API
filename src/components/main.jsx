import React from "react"

export default function Main(props) {
        let worldData = [...props.data]

        if(props.filter.region !== "Filter by Region"){
            worldData = worldData.filter(item => item.region === props.filter.region)
        }
        
        if(props.filter.search.length > 0){
            worldData = worldData.filter((item) => {
                  return item.name.toLowerCase().indexOf(props.filter.search.toLowerCase()) !== -1;
            });
        }

        const worldElements = worldData.map(elem => {
            return (
                    <div key={elem.name} className={`country${props.dark ? " darkelement" : ""}`}>
                        <img src={elem.flag} className="country--flag"/>
                        <div className="country--details">
                            <h3>{elem.name}</h3>
                            <p><span className="bold">Population: </span>
                                {elem.population.toLocaleString()}
                            </p>
                            <p><span className="bold">Region: </span>{elem.region}</p>
                            <p><span className="bold">Capital: </span>{elem.capital}</p>
                        </div>

                        <p className="country--fulldetails" onClick={() => props.fullDetails(elem.name)}>More Details</p>
                    </div>
            )
        })

        //border country names
        let borderName = []
        if(props.current[0]?.borders){
            const borderCountry = [...props.data]
            borderName = props.current[0]?.borders.map(item => {
                const border = borderCountry.filter(elem => item === elem.cca3)
                return(
                    border[0].name
                )
            })
        }

        const currentElem = (
            <div className={`current${props.dark ? " darkbackground" : ""}`}>
                <button onClick={props.back} className={props.dark ? "darkbutton" : ""}>
                    <img src={props.dark ? "./images/dark-arrow.svg" : "./images/arrow-back-outline.svg"} className="back--logo"/>
                    Back
                </button>

                        <img src={props.current[0]?.flag} className="country--flag"/>
                        
                        <div className={`country--details${props.dark ? " darkcurrent" : ""}`}>
                            <h3>{props.current[0]?.name}</h3>    
                            <p><span className="bold">Native Name: </span>
                                {props.current && Object.values(props.current[0]?.nativeName)[0].common}
                            </p>
                            <p><span className="bold">Population: </span>
                                {props.current[0]?.population.toLocaleString()}
                            </p>
                            <p><span className="bold">Region: </span>
                                {props.current[0]?.region}
                            </p>
                            <p><span className="bold">Sub Region: </span>
                                {props.current[0]?.subRegion}
                            </p>
                            <p><span className="bold">Capital: </span>
                                {props.current[0]?.capital}
                            </p>
                        </div>

                        <div className={`other--details${props.dark ? " darkcurrent" : ""}`}>
                            <h3 className="whitespace">{props.current[0]?.name}</h3>
                            <p><span className="bold">Top Level Domain: </span>
                                {props.current[0]?.topleveldomain[0]}
                            </p>
                            <p><span className="bold">Currencies: </span>
                                {props.current && Object.values(props.current[0]?.currencies)[0].name}
                            </p>
                            <p><span className="bold">Languages: </span>
                                {props.current && Object.values(props.current[0]?.languages).join(", ")}
                            </p>
                        </div>

                        {props.current[0]?.borders &&
                            <div className={`border--tile${props.dark ? " darkcurrent" : ""}`}>
                                <p className="border--title"><span className="bold">Border Countries: </span></p>
                                <div className="border--container">
                                    {borderName.map((item, index) => {
                                        return(
                                            <p className={`borders${props.dark ? " darkelement" : ""}`} key={index}>{item}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        }
                </div>
            )

    return(
        <main className={`country--tiles${props.dark ? " darkbackground" : ""}`}>
            {props.current ? currentElem : worldElements}
        </main>
    )
}