import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "*",
		element: <h1>Not Found : 404</h1>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
