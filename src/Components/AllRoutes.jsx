import {Routes,Route} from "react-router-dom"
import HomPage from "./homePage"
import SingleProductPage from "./SingleProductPage"

const AllRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<HomPage/>} />
            <Route path="/:id" element={<SingleProductPage/>} />
        </Routes>
    )
}

export default AllRoutes;