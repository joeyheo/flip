import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Heading,
	Stack,
	StackDivider,
	Image,
	Text,
} from "@chakra-ui/react";
import "../animations.css"; // Import your animations
import example_img from "../logos/example.png";

export default function Home() {
	return (
		<Flex color="white" direction={["column", "column", "row"]}>
			<Box
				className="wrapper"
				position="relative"
				w={["100%", "100%", "50%"]}
				height="100vh"
				bg="#ffcb57"
				overflow="hidden"
			>
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
				<Box
					className="text"
					position="absolute"
					fontSize="60px"
					color="white"
					left="0"
					right="0"
					top="0"
					bottom="0"
					zIndex="99"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Text fontSize="150" fontFamily="Paytone One">
						flip
					</Text>
				</Box>
			</Box>
			<Box
				w={["100%", "100%", "50%"]}
				bg="white"
				height="100vh"
				display="flex" // Make the Box a flex container
				flexDirection="column" // Align children vertically
				justifyContent="flex-start" // Align children to the start (top)
				alignItems="center" // Center children horizontally
				paddingTop="60px" // Add padding at the top
			>
				<Text
					color="black"
					fontFamily="sans-serif"
					fontWeight="bold"
					fontSize="4xl"
					textAlign="center"
					sx={{
						animation: "fadeInUp 1s ease-out",
					}}
				>
					Buy, Sell and Connect
				</Text>
				<Image
					src={example_img} // Replace with your image path
					alt="Descriptive Alt Text"
					width="50%" // Image takes the full width
					height="auto" // Height auto for maintaining aspect ratio
					sx={{
						animation: "fadeInUp 1s ease-out",
					}}
				/>
				<Text
					color="black"
					fontFamily="sans-serif"
					fontWeight=""
					fontSize="10"
					textAlign="center"
					sx={{
						animation: "fadeInUp 1s ease-out",
					}}
				>
					Coming to UC Santa Cruz, Rhode Island School of Design
				</Text>
			</Box>
		</Flex>
	);
}
