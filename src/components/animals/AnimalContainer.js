import { useState } from 'react'
import { AnimalList } from './AnimalList'
import { AnimalSearch } from './AnimalSearch'




export const AnimalContainer = () => {

    const [searchTerm, setSearchTerm] = useState("")







    return (
        <>
            <AnimalSearch  setAnimalSearchTerm={setSearchTerm} />
            <AnimalList animalSearchTerm={searchTerm} />
        </>
    )






}