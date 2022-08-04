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
            p="140px"
            color="#fff"
            mb="5em"
            backgroundSize="cover"
            backgroundImage="url(/shutterstock_1927651358.jpg)"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            w="full"
          >
            <Flex
              ml="10em"
              mt="-80px"
              ml="-50px"
              borderBottomRadius="0%"
              p="10px"
              h="full"
            >
              <Image
                src="/VRMCrrturqalpha.png"
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
                VRMetaCenter
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
                  bg="#d7d7d7"
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
            backgroundSize="cover"
            backgroundImage="url(/shutterstock_1927651358.jpg)"
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
              <Text letterSpacing="widest">VRMetaCenter</Text>
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
                  borderRadius={0}
                  bg="#ddd"
                  color="#fff"
                  rightIcon={<ChevronRightIcon />}
                  boxShadow="dark-lg"
                  _hover={{
                    background: "#ddd",
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
        Welcome to the world of VRMetaCenter!
        </Text>

        <Flex
          justifyContent="space-around"
          alignItems="center"
          mt="50px"
          pt="3em"
          pb="3em"
          pl="15%"
          pr="15%"
          backgroundSize="cover"
          backgroundImage="url(/shutterstock_1927651358.jpg)"
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
          w="full"
          bg="#d7d7d7"
          zIndex="0"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Tooltip label="VRMC">
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
            <Tooltip label="VRMetaCenter">
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
            <Tooltip label="1 Trillion">
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
          What is VRMetaCenter all about? <br />
          VRMetaCenter is the main umbrella that will integrate the various “Meta Verticals” that will comprise the entire Meta Ecosystem. With thoughtful and meaningful projects aimed at bringing EVERYBODY together, we strive to create a system that supports Sports, Business, Education, Research, and Leisure verticals.
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
          backgroundImage="url(/shutterstock_598318151.jpg)"
          backgroundRepeat="no-repeat"
          p="5%"
          maxW="65%"
          ml={0}
          borderTopRightRadius="0em"
          borderBottomRightRadius="0em"
        >
          <Text fontSize="5xl" fontWeight="bold">
          In the Beginning There Was Sports!
          </Text>
          <Text mt="1em">
          VRMC is the main hub unifying all our verticals, and is proud to present our flagship ecosystem, VRMetaSports (VRMS)!

Imagine a world where you can create a team from friends, acquaintances, or strangers you meet playing your favorite sport.
A world where you start on the playground, then move up to the pros. A world where all ages, races, and genders can compete equally based on their skill level.
Imagine no more. Enter the world of the VRMetaSports. Your role is determined by your goals. Just some of the options that
can be filled with experience and passion.
            <br />
            <br />
            Play—Start on the playground to develop your skills to the level where you are discovered by an organized team, where you play for money and fame.
            <br />
            <br />
            Train—Help your team’s players develop their skills to take the team up the ladder.
            <br />
            <br />
            Coach—Develop strategies to win, to use the talents of your players.
            <br />
            <br />
            Manager—Find the best players out there and convince them to play for you.
            <br />
            <br />
            Own—Buy a stadium, find sponsors, players, managers, coaches, trainers, and build a team to dominate the sport. Take your team to international tournaments to gain exposure for more revenues.
            <br />
            <br />
            Sell—Find buyers for advertising in the stadiums, for NFT merchandising, and for ticket sales to watch and cheer for teams for those not interested in being part of the system, but still wanting to be a spectator.      
            <br />
            <br />
            Create—Develop stadiums for play and sell them to owners for their teams. Design team uniforms and paraphernalia.
            <br />
            <br />
            Agent—Represent players to get them the best contracts and teams.
            <br />
            <br />
            Announce—Call the games and provide stats on the players. Develop a following on social media to increase your market share.
          </Text>
        </Flex>
        <Flex flexDirection="column" mr="10%" alignItems="center">
          <Link
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f06070bd-15df-4479-811e-2711f6e1b627/VRMC_-_Sports_Page.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220804T142528Z&X-Amz-Expires=86400&X-Amz-Signature=b45f3e6a4acb8fbc6400c4cb5bfd33a3f685441f12886723634204d6e1085460&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22VRMC%2520-%2520Sports%2520Page.pdf%22&x-id=GetObject"
            isExternal
            _hover={{ textDecoration: "none", boxShadow: "2xl" }}
            borderRadius="50%"
            boxShadow="dark-lg"
            boxSize="80px"
            alignItems="center"
            background="#8a8f93"
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
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f06070bd-15df-4479-811e-2711f6e1b627/VRMC_-_Sports_Page.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220804T142528Z&X-Amz-Expires=86400&X-Amz-Signature=b45f3e6a4acb8fbc6400c4cb5bfd33a3f685441f12886723634204d6e1085460&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22VRMC%2520-%2520Sports%2520Page.pdf%22&x-id=GetObject"
            _hover={{ textDecoration: "none" }}
            mt="1em"
            isExternal
          >
            <Text fontWeight="semibold">Whitepaper</Text>
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
                <Avatar size={"xl"} src="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png" alt="john Dev" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                  John Doe {"   "}
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png">
                    <Image src="/github.svg" alt="github" borderRadius="full" />
                  </Link>
                  <Link href="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png">
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
                <Avatar size={"xl"} src="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png" alt="john Dev" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                  John Doe
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png">
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
                <Avatar size={"xl"} src="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png" alt="Twister Dev" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                John Doe
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png">
                    <Image src="/github.svg" alt="github" borderRadius="full" />
                  </Link>
                  <Link href="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png">
                    <Image
                      src="/twitter.svg"
                      alt="twitter"
                      borderRadius="full"
                    />
                  </Link>
                  <Link href="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png">
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
                <Avatar size={"xl"} src="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png" alt="John Doe" />
                <Text fontWeight={600} color={"gray.500"} mb={1}>
                  John Doe
                </Text>
                <Stack align={"center"} justify={"center"} direction={"row"}>
                  <Link href="https://vrmcwebsitedeploy.vercel.app/VRMCrrturqalpha.png">
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
