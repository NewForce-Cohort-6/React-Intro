import {Routes, Route} from 'react-router-dom'
import { StuffsList } from './stuffs/StuffsList'
import { StuffForm } from './stuffs/StuffForm'
import { ToppingsList } from './toppings/ToppingsList'
import { LocationList } from './locations/LocationList'
import { AnimalContainer } from './animals/AnimalContainer'
import { LocationDetail } from './locations/LocationDetail'
import { AnimalForm } from './animals/AnimalForm'




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

        <Route path= "/animals" element={<AnimalContainer/>} />
        <Route path= "/locations" element={<LocationList />} />

        <Route path= "/locations/detail/:locationId" element={<LocationDetail />} />
        <Route path="/animals/register" element={<AnimalForm/>} />
        </Routes>
        </>
    )
}