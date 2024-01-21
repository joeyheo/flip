import {
	Box,
	Flex,
	Stack,
	Heading,
	Text,
	Container,
	Input,
	Button,
	SimpleGrid,
	Avatar,
	AvatarGroup,
	useBreakpointValue,
	IconProps,
	Icon,
	Center,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import "../animations.css"; // Import your animations
import UCSC_IMG from "../logos/schools/ucsc.png";
import RISD_IMG from "../logos/schools/risd.webp";
import UIUC_IMG from "../logos/schools/uiuc.jpg";
import "@fontsource/paytone-one";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const avatars = [
	{
		name: "UC Santa Cruz",
		url: UCSC_IMG,
	},
	{
		name: "RISD",
		url: RISD_IMG,
	},
	{
		name: "UIUC",
		url: UIUC_IMG,
	},
	{
		name: "soon",
		url: UCSC_IMG,
	},
	{
		name: "soon",
		url: UCSC_IMG,
	},
];

export default function Login() {
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const handleGoogleSignIn = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
			navigate("/");
		} catch (error) {
			setError("Failed to sign in with Google.");
			console.error(error);
		}
	};
	return (
		<Box
			position={"relative"}
			className="wrapper"
			height="100vh"
			bg="#ffcb57"
			overflow="hidden"
		>
			<Container
				as={SimpleGrid}
				maxW={"7xl"}
				columns={{ base: 1, md: 2 }}
				spacing={{ base: 10, lg: 32 }}
				py={{ base: 10, sm: 20, lg: 32 }}
				zIndex={99}
			>
				<Stack spacing={{ base: 10, md: 20 }} zIndex={99}>
					<Heading
						lineHeight={1.1}
						fontFamily={"Paytone One"}
						fontWeight={"Light"}
						fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
					>
						Join the{" "}
						<Text
							as={"span"}
							bgGradient="linear(to-r, blue.400,green.400)"
							bgClip="text"
						>
							flip
						</Text>{" "}
						movement & connect with other university students.
					</Heading>
					<Stack direction={"row"} spacing={4} align={"center"} zIndex={99}>
						<AvatarGroup>
							{avatars.map((avatar) => (
								<Avatar
									key={avatar.name}
									name={avatar.name}
									src={avatar.url}
									// eslint-disable-next-line react-hooks/rules-of-hooks
									size={useBreakpointValue({ base: "md", md: "lg" })}
									position={"relative"}
									zIndex={2}
									_before={{
										content: '""',
										width: "full",
										height: "full",
										rounded: "full",
										transform: "scale(1.125)",
										bgGradient: "linear(to-bl, red.400,pink.400)",
										position: "absolute",
										zIndex: -1,
										top: 0,
										left: 0,
									}}
								/>
							))}
						</AvatarGroup>
						<Text
							fontFamily={"Paytone One"}
							fontSize={{ base: "4xl", md: "6xl" }}
							zIndex={99}
						>
							+
						</Text>
						<Flex
							align={"center"}
							zIndex={99}
							justify={"center"}
							fontFamily={"Paytone One"}
							fontSize={{ base: "sm", md: "lg" }}
							bg={"gray.800"}
							color={"white"}
							rounded={"full"}
							minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
							minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
							position={"relative"}
							_before={{
								content: '""',
								width: "full",
								height: "full",
								rounded: "full",
								transform: "scale(1.125)",
								bgGradient: "linear(to-bl, orange.400,yellow.400)",
								position: "absolute",
								zIndex: -1,
								top: 0,
								left: 0,
							}}
						>
							YOU
						</Flex>
					</Stack>
				</Stack>
				<Stack
					bg={"gray.50"}
					rounded={"xl"}
					p={{ base: 4, sm: 6, md: 8 }}
					spacing={{ base: 8 }}
					maxW={{ lg: "lg" }}
					zIndex={99}
				>
					<Stack spacing={4}>
						<Heading
							color={"gray.800"}
							lineHeight={1.1}
							fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
							fontFamily={"Paytone One"}
						>
							Join the{" "}
							<Text
								as={"span"}
								bgGradient="linear(to-r, blue.400,green.400)"
								bgClip="text"
							>
								flip
							</Text>{" "}
							movement
						</Heading>
						<Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
							We're on the lookout for university students eager to be a part of
							our dynamic and vibrant community, centered on the shared
							experience of buying, selling, and connecting with peers.
						</Text>
					</Stack>
					<Box as={"form"} mt={3}>
						{/* Google */}
						{error && <Text color="red.500">{error}</Text>}
						<Button
							onClick={handleGoogleSignIn}
							w={"full"}
							variant={"outline"}
							leftIcon={<FcGoogle />}
						>
							<Center>
								<Text>Sign in with Google</Text>
							</Center>
						</Button>
						<Text
							mt={3}
							color={"black"}
							fontSize={{ base: "xxs", sm: "xs" }} // Set to 'xs' for base, 'sm' for sm breakpoint
						>
							To access the flip application, you need to sign in using your
							.edu email address. Please be aware that full functionality of
							flip requires creating an account by signing in with Google.
						</Text>
					</Box>
				</Stack>
			</Container>
			<Box
				className="one"
				position="absolute"
				borderRadius="full"
				w="600px"
				h="600px"
				bg="#a960ee" // Solid purple background
				left="-50px"
				top="-300px"
				zIndex="3"
				sx={{ filter: "blur(90px)", opacity: 0.7 }}
			/>{" "}
			<Box
				className="two"
				position="absolute"
				w="500px"
				h="800px"
				bg="#ff333d"
				bottom="-30px"
				left="-80px"
				sx={{ filter: "blur(50px)", opacity: 0.8 }}
			/>
			<Box
				className="three"
				position="absolute"
				borderRadius="full"
				w="450px"
				h="450px"
				bg="#ffcb57"
				bottom="-80px"
				right="-100px"
				sx={{
					animation: "flyPlus 10s linear infinite",
					filter: "blur(50px)",
					opacity: 0.8,
				}}
			/>
			<Box
				className="four"
				position="absolute"
				borderRadius="full"
				w="350px"
				h="350px"
				bg="#90e0ff"
				margin="auto"
				bottom="0"
				right="0"
				sx={{
					animation: "flyPlus 15s linear infinite",
					filter: "blur(50px)",
					opacity: 0.8,
				}}
			/>
		</Box>
	);
}
