import React, { useState, useEffect } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import { auth } from "./firebase";
//COMPONENTS
import ProtectedRoute from "./components/protected-route";
import Navbar from "./components/navbar";
import LoadingScreen from "./components/loading-screen";
//ROUTES
import NotFoundPage from "./routes/404";
import About from "./routes/about";
import Home from "./routes/home";
import Login from "./routes/login";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<Navbar />
			</ProtectedRoute>
		),
		children: [
			{
				path: "",
				element: <Home />,
			},
		],
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*", // Catch-all route
		element: <NotFoundPage />,
	},
]);

function App() {
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const init = async () => {
			await auth.authStateReady();
			setLoading(false);
		};
		init();
	}, []);

	return (
		<ChakraProvider theme={theme}>
			{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
		</ChakraProvider>
	);
}

export default App;
