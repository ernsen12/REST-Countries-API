import React from "react";
import Header from "./components/header"
import Searchbar from "./components/searchbar"
import Main from "./components/main"

export default function App(){
    //darkMode
    const [darkMode, setDarkMode] = React.useState(false)
    //api data
    const [data, setData] = React.useState([])
    // current country
    const [current, setCurrent] = React.useState("")

    //sort - Search
    const continents = ["Filter by Region", "Africa", "Americas", "Asia", "Europe", "Oceania"]
    const[filter, setFilter] = React.useState({
        region: continents[0],
        search: ""
    })

    // toggle dark mode
    function handleDarkMode() {
        setDarkMode(prevState => !prevState)
    }

    //Rest world APi call
    React.useEffect(() => {
        async function getWorldData() {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const data = await res.json()
            setData(data.map(elem => {
                return({
                    flag: elem.flags.png,
                    name: elem.name.common,
                    population: elem.population,
                    region: elem.region,
                    capital: elem.capital,
                    // full details
                    nativeName: elem.name.nativeName,
                    subRegion: elem.subregion,
                    topleveldomain: elem.tld,
                    currencies: elem.currencies,
                    languages: elem.languages,
                    borders: elem.borders,
                    cca3: elem.cca3
                })
            }))
        }
        getWorldData()
    }, [])

    function handleSubmit(event){
        event.preventDefault();
    }

    function handleFilter(event){
        const {name} = event.target
        setFilter((prevState) => {
            return({
                ...prevState,
                [name]: event.target.value
            })
        })
    }

    function fullDetails(name){
        const dataArray = [...data]
        setCurrent(dataArray.filter((elem) => elem?.name === name))
    }
    
    function back(){
        setCurrent("");
        setFilter({
            region: continents[0],
            search: ""
        })
    }

console.log(current)
    return(
        <div className="container">
            <Header 
                darkMode={handleDarkMode}
                dark={darkMode}
            />

            {!current && 
            <Searchbar 
                dark={darkMode}
                handleSubmit={handleSubmit}
                continents={continents} 
                handleSort={handleFilter}
                handleSearch={handleFilter}
            />}
            

            <Main
                data={data}
                fullDetails={fullDetails}
                filter={filter}
                dark={darkMode}
                current={current}
                back={back}
            />
        </div>
    )
}