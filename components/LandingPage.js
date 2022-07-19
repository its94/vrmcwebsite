import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Container,
  Code,
  Heading,
  Hide,
  Link,
  Divider,
  Center,
  Show,
  Grid,
  GridItem,
  AspectRatio,
  Stack,
  Tooltip,
  Avatar
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DownloadIcon,
  ExternalLinkIcon
} from "@chakra-ui/icons";
import Card from "../components/Card";

const LandingPage = (props) => {
  return (
    <Box h="full" alignItems="center" w="full">
      <Flex flexDirection="column" h="full" alignItems="center" w="full">
        <Hide below="md">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            pt="140px"
            mb="5em"
            backgroundSize="contain"
            backgroundImage="url(/tree_skeleton_small.svg)"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            w="full"
          >
            <Flex
              ml="10em"
              
              borderBottomRadius="0%"
              p="10px"
              h="full"
            >
              <Image
                src="/VRMCrrturqalpha.png"
                boxSize="180px"
                alt="VRMC"
                zIndex="2"
              />
            </Flex>
            <Flex mr="20%" flexDirection="column" h="full">
              <Heading
                letterSpacing="widest"
                fontSize="5xl"
                fontWeight="semibold"
              >
                VRMeta Center
              </Heading>
              <Text letterSpacing="widest" textTransform="uppercase">
              WE BUILD BREATHTAKING VIRTUAL REALITY EXPERIENCES AND 3D VIDEOS. 100% ADAPTED TO YOUR BUSINESS NEEDS WITH AN END TO END DIGITAL PROCESS
              </Text>
              <Link
                sx={{ textDecoration: "none" }}
                _hover={{ textDecoration: "none" }}
                href="/dapp"
                pt="5px"
              >
                <Button
                  variant="solid"
                  size="md"
                  mt="2em"
                  pl="2em"
                  pr="1em"
                  borderRadius={0}
                  bg="#1a202c"
                  color="#fff"
                  boxShadow="dark-lg"
                  rightIcon={<ChevronRightIcon />}
                  _hover={{ background: "#fff", color: "#1a202c" }}
                >
                  Buy token!
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Hide>

        <Show below="md">
          <Flex
            justifyContent="center"
            alignItems="center"
            pt="6vh"
            mb="5em"
            backgroundSize="contain"
            backgroundImage="url(/tree_skeleton_small.svg)"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            w="full"
          >
            <Flex
              alignItems="center"
              alignContent="center"
              flexDirection="column"
              h="full"
            >
              <Heading
                letterSpacing="widest"
                fontSize="6xl"
                fontWeight="semibold"
              >
                VRMC
              </Heading>
              <Text letterSpacing="widest">VRMeta Center</Text>
              <Link
                sx={{ textDecoration: "none" }}
                _hover={{ textDecoration: "none" }}
                href="/dapp"
              >
                <Button
                  variant="solid"
                  size="sm"
                  mt="2em"
                  pl="2em"
                  pr="1em"
                  borderRadius={155}
                  bg="#1a202c"
                  color="#fff"
                  rightIcon={<ChevronRightIcon />}
                  boxShadow="dark-lg"
                  _hover={{
                    background: "#fff",
                    color: "#1a202c",
                    textDecoration: "none",
                  }}
                >
                  Try it!
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Show>

        <Text color="gray.500" mb="2em" letterSpacing="widest" fontSize="sm">
        Welcome to the world of VRMeta Center & VRMeta Sports
        </Text>

        <Flex
          justifyContent="space-around"
          alignItems="center"
          mt="50px"
          pt="3em"
          pb="3em"
          pl="15%"
          pr="15%"
          backgroundSize="contain"
          backgroundImage="url(/tree_skeleton_small.svg)"
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
          w="full"
          bg="#1a202c"
          zIndex="0"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Tooltip label="Dummy Numbers">
              <Text fontSize="2xl" color="#fff">
              VRMC
              </Text>
            </Tooltip>

            <Text fontSize="sm" color="#fff">
            Token Symbol
            </Text>
          </Flex>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Tooltip label="Dummy Numbers">
              <Text fontSize="2xl" color="#fff">
              VRMetaCenter
              </Text>
            </Tooltip>
            <Text fontSize="sm" color="#fff">
            Token Name
            </Text>
          </Flex>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Tooltip label="Dummy Numbers">
              <Text fontSize="2xl" color="#fff">
              1000000000000
              </Text>
            </Tooltip>
            <Text fontSize="sm" color="#fff">
              Supply
            </Text>
          </Flex>
        </Flex>

        <Flex align="center">
          <Link
            href="#about"
            _hover={{ textDecoration: "none", boxShadow: "dark-lg" }}
            mt="80px"
            borderRadius="0%"
            boxShadow="dark-lg"
            pos="absolute"
          >
            <ChevronDownIcon
              boxSize="10"
              borderRadius="0%"
              color="#1a202c"
              zIndex="9999"
            />
          </Link>
        </Flex>

        <Flex align="center" w="50%" mt="8%">
          <Text textAlign="center" letterSpacing="wide">
          Your role is determined by your goals. <br />
           
          </Text>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        mt="5em"
        ml="0"
        alignItems="center"
        id="about"
      >
        <Flex
          flexDirection="column"
          backgroundColor="#1a202c"
          color="#fff"
          p="5%"
          maxW="65%"
          ml={0}
          borderTopRightRadius="0em"
          borderBottomRightRadius="0em"
        >
          <Text fontSize="5xl" fontWeight="bold">
            VMTs
          </Text>
          <Text mt="1em">
          We build breathtaking Virtual Reality experiences and 3D videos. 100% adapted to your business needs with an end to end digital process.
            <br />
            <br />
            Your role is determined by your goals. Just some of the options that can be filled with experience and passion.
            <br />
            <br />
            Play Tran Coach Manage Own, Sell, Earn, and more...
          </Text>
        </Flex>
        <Flex flexDirection="column" mr="10%" alignItems="center">
          <Link
            href="https://vrmetacenterdocumentation.vercel.app/"
            isExternal
            _hover={{ textDecoration: "none", boxShadow: "2xl" }}
            borderRadius="50%"
            boxShadow="dark-lg"
            boxSize="80px"
            alignItems="center"
            alignContent="center"
          >
            <ExternalLinkIcon
              boxSize="60px"
              color="#1a202c"
              pl="20px"
              pt="20px"
            />
          </Link>
          <Link
            href="https://vrmetacenterdocumentation.vercel.app/"
            _hover={{ textDecoration: "none" }}
            mt="1em"
            isExternal
          >
            <Text fontWeight="semibold">Documentation</Text>
          </Link>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        align="center"
        w="full"
        mt="8%"
        alignContent="center"
        alignItems="center"
      >
        <Flex w="50%" alignContent="center" alignItems="center">
          <Text textAlign="center" letterSpacing="wide">
            {/* VMTree allows anyone to deploy a verifable merkle tree using the
            chainlink network. Lorem ipsum condimentum ornare ante, at maximus
            sapien porta sit amet. Morbi orci lectus, cursus ut ipsum convallis,
            tempor feugiat quam. In vel odio non velit blandit lobortis. Mauris
            quis quam fermentum, cursus quam at, dignissim ante. */}
          </Text>
        </Flex>
      </Flex>

      <Container justifyContent="center" mt="5%">
        <AspectRatio maxW="560px" ratio={4 / 3}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/FZeOU83Ktj8"
            allowFullScreen
          />
        </AspectRatio>
      </Container>

      <Flex
        flexDirection="column"
        align="center"
        w="full"
        mt="5%"
        alignContent="center"
        alignItems="center"
        id="team"
        justifyContent="center"
      >
        <Heading>VRMC Team</Heading>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt="5em"
        >
          <Flex justifyContent="center" alignItems="center" mb="20px">
            <Flex mr="80px">
              <Box
                maxW={"320px"}
                w={"full"}
                rounded={"lg"}
                pr={15}
                pl={15}
                textAlign={"center"}
                alignItems="center"
                justifyContent="center"
              >
                <Avatar size={"xl"} src="/u_twisterDev.png" alt="Twister Dev" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                  Twister Dev {"   "}
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://github.com/twister-dev">
                    <Image src="/github.svg" alt="github" borderRadius="full" />
                  </Link>
                  <Link href="https://twitter.com/youjustwin42">
                    <Image
                      src="/twitter.svg"
                      alt="twitter"
                      borderRadius="full"
                    />
                  </Link>
                </Stack>
              </Box>
            </Flex>
            <Flex ml="80px">
              <Box
                maxW={"320px"}
                w={"full"}
                rounded={"lg"}
                pr={15}
                pl={15}
                textAlign={"center"}
                alignItems="center"
                justifyContent="center"
              >
                <Avatar size={"xl"} src="/u_brad.jpg" alt="Twister Dev" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                  heyitsbrad
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://github.com/swicksystems">
                    <Image src="/github.svg" alt="github" borderRadius="full" />
                  </Link>
                </Stack>
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent="center" alignItems="center" mt="20px">
            <Flex mr="80px">
              <Box
                maxW={"320px"}
                w={"full"}
                rounded={"lg"}
                pr={15}
                pl={15}
                textAlign={"center"}
                alignItems="center"
                justifyContent="center"
              >
                <Avatar size={"xl"} src="/u_aayush.png" alt="Twister Dev" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                  aayush4vedi
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://github.com/aayush4vedi">
                    <Image src="/github.svg" alt="github" borderRadius="full" />
                  </Link>
                  <Link href="https://twitter.com/aayush4vedi">
                    <Image
                      src="/twitter.svg"
                      alt="twitter"
                      borderRadius="full"
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/aayush-chaturvedi-bb7143116/">
                    <Image
                      src="/linkedin.svg"
                      alt="linkedin"
                      borderRadius="full"
                    />
                  </Link>
                </Stack>
              </Box>
            </Flex>
            <Flex ml="80px">
              <Box
                maxW={"320px"}
                w={"full"}
                rounded={"lg"}
                pr={15}
                pl={15}
                textAlign={"center"}
                alignItems="center"
                justifyContent="center"
              >
                <Avatar size={"xl"} src="/u_cedric.JPG" alt="Twister Dev" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                  Cedric Heidt
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://www.linkedin.com/in/cedric-heidt/">
                    <Image
                      src="/linkedin.svg"
                      alt="linkedin"
                      borderRadius="full"
                    />
                  </Link>
                </Stack>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;
