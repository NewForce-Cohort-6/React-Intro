import React, {useState, useEffect} from "react"





export const AnimalList = () => {

    const [animals, setAnimals] = useState([])


    useEffect(() => {
        fetch("http://localhost:8088/animals?_expand=location&_expand=customer")
        .then(response=>response.json())
        .then(setAnimals)

    }, [])





    return(
        <>
        <h1>Animals</h1>
        {
            animals.map(singleAnimal => <div>
                <h3>{singleAnimal.name}</h3>
                <p>Owner: {singleAnimal?.customer.name}</p>
                <p>Location: {singleAnimal?.location.name}</p>
            </div>)
        }
        </>
    )
}