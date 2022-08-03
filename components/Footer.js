import {
  Box,
  Button,
  Code,
  Flex,
  Image,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      pt="5em"
      minH="20em"
      alignItems="center"
      justifyContent="center"
      mt="150px"
      p="0"
      border="none"
      zIndex="-1"
      left= "0"
      bottom= "0"
    >
      <Text color="gray.500" mb="8em" letterSpacing="widest">
         VRMC & VRMCSPORTS
      </Text>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        backgroundImage="url(/footer_bg.svg)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgColor="#1a202c"
        borderTopRadius="0%"
        w="full"
      >
        <Image
          src="/vrmctokenmini.png"
          alt="VMTree"
          mt="-4em"
          boxSize="150px"
        />
        <Flex flexDirection="column" >
          <Flex>
            <Link
              href="https://vrmetacenterdocumentation.vercel.app/"
              isExternal="true"
              sx={{ textDecoration: "none" }}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variant="solid"
                size="md"
                m="1em"
                borderRadius={0}
                bg="#fff"
                _hover={{ background: "#2c4cb6", color: "#fff" }}
                sx={{ textDecoration: "none" }}
              >
                DOCUMENTATION
              </Button>
            </Link>
            <Link
              href="/dapp"
              isExternal="true"
              sx={{ textDecoration: "none" }}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                variant="solid"
                size="md"
                m="1em"
                borderRadius={0}
                bg="#fff"
                _hover={{ background: "#2c4cb6", color: "#fff" }}
              >
                DAPP
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Code color="whiteAlpha.600" mb="2em" mt="4em" fontSize="sm" bg="none">
          © Copyright 2022 VRmetaCenter - All rights reserved
        </Code>
      </Flex>
    </Flex>
  );
};

export default Footer;
