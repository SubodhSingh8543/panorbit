import { Box } from "@chakra-ui/react"
import HomeCard from "./homeCard";
import { useEffect, useState } from "react";
import axios from "axios";
// import SimpleMap from "./googleMpas";

const HomPage = () => {
    const [data,setData] = useState([]);

    const getData = async () => {
        try {
            const fetchedData = await axios.get(`https://panorbit.in/api/users.json`);
            setData(fetchedData.data.users)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData()
    },[])

    // console.log(data);
    return (
        <Box bg={"#6634c8"} h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <HomeCard data={data} />
            {/* <SimpleMap/> */}
        </Box>
    )
}

export default HomPage;