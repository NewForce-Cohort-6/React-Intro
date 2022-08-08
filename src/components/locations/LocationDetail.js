import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"





export const LocationDetail = () => {

    const [singleLocation, setSingleLocation] = useState({})

    const {locationId} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:8088/locations/${locationId}?_embed=animals`)
        .then(r => r.json())
        .then(location => setSingleLocation(location))


    },[])








    return(
        <>
          <div >
              <h3>{singleLocation.name}</h3>
                <p>{singleLocation.address}</p>
                <div>
                    <h4>Animals:</h4>
                    { singleLocation.animals?.length === 0?
                     <p>No current animals</p>
                    :
                    singleLocation.animals?.map(singleAnimal => <p>{singleAnimal.name}</p>)
                    }
                </div>
            </div>
        </>
    )



}