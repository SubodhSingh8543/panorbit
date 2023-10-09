import { Image, Menu, MenuButton, MenuItem, MenuList, useDisclosure, Button, Box } from "@chakra-ui/react";

const CollapseChat = ({ data }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box position={"absolute"} mt={"75vh"} ml={"40%"}>
            <Menu >
            <MenuButton ml={"70%"} as={Button} mt="20px" bg={"#4054c8"} color={"white"} borderRadius={"none"} w={"150px"} >
                 Chats
            </MenuButton>
            <MenuList maxH={"400px"} overflow={"scroll"}>
                {data?.map((el, i) => (
                    <MenuItem minH='48px'>
                        <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src={el?.profilepicture}
                            alt='Fluffybuns the destroyer'
                            mr='12px'
                        />
                        <span>{el.name}</span>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
        </Box>
    )
}

export default CollapseChat;

