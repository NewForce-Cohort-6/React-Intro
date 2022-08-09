import React, {useState, useEffect} from "react"

import Form from 'react-bootstrap/Form';





export const AnimalList = ({animalSearchTerm}) => {

    const [animals, setAnimals] = useState([])
    const [searchedAnimals, setSearchedAnimals] = useState([])
    const [animalselected, setAnimalSelected] = useState("")



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
        <div className="ms-3">

        <h1>Animals</h1>
        {
            searchedAnimals.map(singleAnimal => <div>
                <h3>{singleAnimal.name}</h3>
                <p>Owner: {singleAnimal?.customer.name}</p>
                <p>Location: {singleAnimal?.location.name}</p>
            </div>)
        }



    <Form.Select onChange={e => {
        setAnimalSelected(e.target.value)
    }} value={animalselected} >
        {
            animals.map(x => <option >{x.name}</option>)
        }

    </Form.Select>


        </div>
        </>
    )
}