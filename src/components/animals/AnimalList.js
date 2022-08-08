import React, {useState, useEffect} from "react"





export const AnimalList = ({animalSearchTerm}) => {

    const [animals, setAnimals] = useState([])
    const [searchedAnimals, setSearchedAnimals] = useState([])



    useEffect(() => {
        fetch("http://localhost:8088/animals?_expand=location&_expand=customer")
        .then(response=>response.json())
        .then(setAnimals)

    }, [])

    useEffect(() => {

        const newState = animals.filter( singleAnimal => singleAnimal.name.toLowerCase().includes(animalSearchTerm.toLowerCase()))


        setSearchedAnimals(newState)


    },[animals, animalSearchTerm])





    return(
        <>
        <h1>Animals</h1>
        {
            searchedAnimals.map(singleAnimal => <div>
                <h3>{singleAnimal.name}</h3>
                <p>Owner: {singleAnimal?.customer.name}</p>
                <p>Location: {singleAnimal?.location.name}</p>
            </div>)
        }
        </>
    )
}