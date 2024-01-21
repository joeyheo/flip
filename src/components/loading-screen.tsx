import { Box, Spinner, Text } from "@chakra-ui/react";

export default function LoadingScreen() {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
		>
			<Box textAlign="center">
				<Spinner size="xl" />
				<Text fontSize="xl" marginTop="4">
					Loading...
				</Text>
			</Box>
		</Box>
	);
}
