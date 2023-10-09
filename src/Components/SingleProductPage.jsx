import { Box, Flex, Stack, StackDivider, Text, Divider, Image, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoogleMaps from "./googleMpas";
import CollapseChat from "./CollapsableChatBox";

const SingleProductPage = () => {
    const [active, setActive] = useState("Profile");
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [filt, setFilt] = useState({});


    const getData = async () => {
        try {
            const fetchedData = await axios.get(`https://panorbit.in/api/users.json`);
            setData(fetchedData.data.users)
            setFilt(fetchedData.data?.users?.find((el, i) => el.id == id))
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData()
    }, []);
    

    console.log(filt);
    return (
        <>
            <Box position={"relative"} display={"flex"} border={"0px solid red"} h={"auto"} m={"20px"} gap={"10px"}>
                <Flex w={"250px"} border={"0px solid blue"} bg={"#4054c8"} borderRadius={"20px"} justifyContent={"center"} alignItems={'center'} h={"650px"}>
                    <Box spacing='4' border={"0px solid white"} w={"70%"} >
                        <Text onClick={() => setActive("Profile")} color={active == "Profile" ? "white" : "#e2e2e2"} fontWeight={active == "Profile" ? "bold" : "null"} textAlign={"start"} mt={"5px"} mb={"5px"} >Profile</Text>
                        <Divider />
                        <Text onClick={() => setActive("Post")} color={active == "Post" ? "white" : "#e2e2e2"} fontWeight={active == "Post" ? "bold" : "null"} textAlign={"start"} mt={"5px"} mb={"5px"}>Post</Text>
                        <Divider />
                        <Text onClick={() => setActive("Gallary")} color={active == "Gallary" ? "white" : "#e2e2e2"} fontWeight={active == "Gallary" ? "bold" : "null"} textAlign={"start"} mt={"5px"} mb={"5px"}>Gallary</Text>
                        <Divider />
                        <Text onClick={() => setActive("ToDo")} color={active == "ToDo" ? "white" : "#e2e2e2"} fontWeight={active == "ToDo" ? "bold" : "null"} textAlign={"start"} mt={"5px"} mb={"5px"}>ToDo</Text>
                    </Box>
                </Flex>
                <Box w={"100%"} border={"0px solid green"} minH={"600px"}>
                    <Flex h={"50px"} borderBottom={"1px solid grey"} justifyContent={"space-between"} alignItems={"center"} pl={"5px"} pr={"5px"} >
                        <Text fontWeight={"semibold"} color={"#545454"}>{active}</Text>
                        <Flex justifyContent={"space-between"} gap={"20px"} alignItems={"center"} >
                            <Image h={"40px"} w={"40px"} borderRadius={"50%"} src={filt?.profilepicture} alt="error" />
                            <Text fontSize='sm'>
                                {filt?.name}
                            </Text>
                        </Flex>
                    </Flex>
                    {active === "Profile" && <Box border={"0px solid red"} display={"flex"} h={"80%"} borderTop={"none"} mt={"30px"}>
                        <Box w={"35%"} h={"100%"} >
                            <Flex justifyContent={"space-between"} gap={"20px"} alignItems={"center"} flexDirection={"column"} >
                                <Image mt={"30px"} h={"120px"} w={"120px"} borderRadius={"50%"} src={filt?.profilepicture} alt="error" />
                                <Text fontWeight={"semibold"} color={"#545454"}>
                                    {filt?.name}
                                </Text>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Username :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.name}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>e-mail :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.email}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Phone :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.phone}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Website :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.website}`}</Box>
                            </Flex>

                            <Divider borderColor="#545454" w={"80%"} mt={"5px"} mb={"5px"} ml={"10%"} />

                            <Text fontWeight={"medium"} color={"#9a9a9a"} textAlign={"center"}>Company</Text>

                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Name :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.company?.name}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Cachphrase :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.company?.catchPhrase}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>bs :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.company?.bs}`}</Box>
                            </Flex>
                        </Box>
                        <Box w={"75%"} h={"100%"} borderLeft={"1px solid grey"}>
                            <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"} mt={"30px"}>Address :</Box>

                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Street :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.address?.street}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Suite :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.address?.suite}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>City :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.address?.city}`}</Box>
                            </Flex>
                            <Flex border={"0px solid red"} mt={"5px"} >
                                <Box fontWeight={"medium"} color={"#9a9a9a"} w={"150px"} border={"0px solid green"} textAlign={"end"}>Zipcode :</Box>
                                <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.address?.zipcode}`}</Box>
                            </Flex>


                            {/* <Image w={"80%"} h={"50%"} m={"auto"} borderRadius={"10px"} src="https://www.footballgroundmap.com/data/maps/grounds/11243.jpg" alt="error" mt={"10px"} /> */}

                            <GoogleMaps latitude={`${filt?.address?.geo?.lat}`} longitude={`${filt?.address?.geo?.lng}`} />

                            <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
                                <Flex mt={"5px"} >
                                    <Box fontWeight={"medium"} color={"#9a9a9a"} w={"65px"} border={"0px solid green"} textAlign={"end"}>Lat :</Box>
                                    <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.address?.geo?.lat}`}</Box>
                                    <Box fontWeight={"medium"} color={"#9a9a9a"} w={"70px"} border={"0px solid green"} textAlign={"end"}>Long :</Box>
                                    <Box textAlign={"start"} ml={"5px"} w={"50%"} border={"0px solid green"} fontWeight={"semibold"} color={"#545454"}>{` ${filt?.address?.geo?.lng}`}</Box>
                                </Flex>
                            </Box>
                        </Box>
                        <CollapseChat data={data} />
                    </Box>}
                    {active !== "Profile" && <Flex border={"0px solid blue"} justifyContent={"center"} alignItems={"center"} h="600px" >
                        <Heading color="#d3d3d3" fontSize={"80px"}>Comming Soon</Heading>
                    </Flex>}
                </Box>
            </Box>
        </>
    )
}

export default SingleProductPage;