import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // Adjust this import based on your project

// Typing the component with PropsWithChildren
const ProtectedRoute: React.FC<React.PropsWithChildren<{}>> = ({
	children,
}) => {
	const isAuthenticated = auth.currentUser; // Replace with your authentication logic

	if (!isAuthenticated) {
		// Redirect to the login page or render something else
		return <Navigate to="/login" />;
	}

	// If the user is authenticated, render the children components
	return <>{children}</>;
};

export default ProtectedRoute;
