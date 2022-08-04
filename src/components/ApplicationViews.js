import {Routes, Route} from 'react-router-dom'
import { StuffsList } from './stuffs/StuffsList'
import { StuffForm } from './stuffs/StuffForm'
import { ToppingsList } from './toppings/ToppingsList'
import { AnimalList } from './animals/AnimalList'
import { LocationList } from './locations/LocationList'




export const ApplicationViews = () => {








    return(
        <>
        <Routes>
            {/* Route 1 */}
        <Route path="/" element={ <p>It Works</p> }/>
            {/* Route 2 */}
        <Route path= "/toppings" element={<ToppingsList />} />
            {/* Route 3 */}
        {/* <Route path= "/stuffs" element={<StuffsList />} /> */}
            {/* Route 4 Create */}
        {/* <Route path= "/stuffs/create" element={<StuffForm />} /> */}

        <Route path= "/animals" element={<AnimalList />} />
        <Route path= "/locations" element={<LocationList />} />




        </Routes>
        </>
    )
}