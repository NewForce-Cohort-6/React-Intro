import React, {useState, useEffect} from "react"





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
            locations.map(singleLocation => <div>
                <h3>{singleLocation.name}</h3>
                <p>{singleLocation.address}</p>
                <div>
                    <h4>Animals:</h4>
                    { singleLocation.animals.length === 0?
                     <p>No current animals</p>
                    :
                    singleLocation?.animals.map(singleAnimal => <p>{singleAnimal.name}</p>)
                    }
                </div>
            </div>)
        }
        </>
    )
}