




export const AnimalSearch = ({setAnimalSearchTerm}) => {







    return (

        <>

            <input
            type="text"
            placeholder="Search Animals Here"
            onChange={(e) => setAnimalSearchTerm(e.target.value)}

            />



        </>
    )
}