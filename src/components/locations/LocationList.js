import React, {useState, useEffect} from "react"
import { LocationCard } from "./LocationsCard"




export const LocationList = () => {

    const [locations, setLocations] = useState([])


    useEffect(() => {
        fetch(`http://localhost:8088/locations?_embed=animals`)
        .then(response=>response.json())
        .then(setLocations)

    }, [])





    return(
        <>
        <h1>Locations</h1>
        {
             locations.map( taco => <LocationCard key={taco.id} singleLocation={taco}/>)
        }
        </>
    )
}