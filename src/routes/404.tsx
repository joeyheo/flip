import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import img404 from "../logos/404.png";
import { useNavigate } from "react-router-dom";
import "@fontsource/paytone-one";

export default function NotFoundPage() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/"); // Navigate to /home when the button is clicked
	};
	return (
		<Box
			textAlign="center"
			height="100vh" // Full viewport height
			width="100vw" // Full viewport width
			backgroundImage={img404} // Replace with your image path
			backgroundSize="cover" // This ensures that the background covers the whole Box
			backgroundPosition="center" // This centers the background image
			backgroundRepeat="no-repeat" // This will prevent the image from repeating
		>
			<Flex
				direction="column" // Stack children vertically
				align="center" // Align children horizontally in the center
				justify="center" // Align children vertically in the center
				height="100%" // Take the full height of the parent container
			>
				<Heading
					as="h2"
					size="2xl"
					bgGradient="linear(to-l, orange.300, pink.600)"
					backgroundClip="text"
					fontFamily="Paytone One"
				>
					404
				</Heading>
				<Text
					fontFamily="Paytone One"
					fontSize="18px"
					mt={3}
					mb={2}
					color={"white"}
				>
					Oops! Looks like the page you're searching for took a wrong turn at
					the Moon and got lost in space.
				</Text>
				<Text fontFamily="Paytone One" color={"white"} mb={6}>
					(p.s. credit to raspberry pi for this awesome background)
				</Text>
				<Button
					onClick={handleGoHome} // Attach the click handler
					colorScheme="pink"
					bgGradient="linear(to-l, orange.300, pink.600)"
					color="white"
					variant="solid"
					fontFamily="Paytone One"
				>
					Wanna go back home?
				</Button>
			</Flex>
		</Box>
	);
}
