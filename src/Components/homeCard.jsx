import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {

    return (
        <Card w={"50%"} >
            <CardHeader bg={"#f6f6f6"} borderTopRadius={"5px"}>
                <Heading size='md'>Select an Account</Heading>
            </CardHeader>

            <CardBody maxH={"400px"} overflow={"scroll"}>
                <Stack divider={<StackDivider />} spacing='4'>
                    {data?.map((el, i) => (
                        <Link to={`/${el?.id}`}  >
                            <Flex justifyContent={"space-between"} gap={"20px"} alignItems={"center"} >
                                <Image h={"70px"} w={"70px"} borderRadius={"50%"} src={el?.profilepicture} alt="error" />
                                <Text fontSize='sm'>
                                    {el?.name}
                                </Text>
                            </Flex>
                        </Link>
                    ))}
                </Stack>
            </CardBody>
        </Card>
    )
}


export default HomeCard;