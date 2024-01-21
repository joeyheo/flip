import { Box, Flex, Link as ChakraLink, IconButton } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { FiHome, FiUser, FiLogOut } from "react-icons/fi";

export default function Layout() {
	const navigate = useNavigate();
	const onLogOut = async () => {
		if (window.confirm("Are you sure you want to log out?")) {
			await auth.signOut();
			navigate("/login");
		}
	};

	return (
		<Box>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				padding="1.5rem"
			>
				<ChakraLink as={Link} to="/" _hover={{ textDecoration: "none" }}>
					<IconButton aria-label="Home" icon={<FiHome />} />
				</ChakraLink>
				<ChakraLink as={Link} to="/profile" _hover={{ textDecoration: "none" }}>
					<IconButton aria-label="Profile" icon={<FiUser />} />
				</ChakraLink>
				<IconButton
					aria-label="Log Out"
					icon={<FiLogOut />}
					onClick={onLogOut}
				/>
			</Flex>
			<Outlet />
		</Box>
	);
}
