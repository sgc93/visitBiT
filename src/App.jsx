import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<section>
			<HomePage />
		</section>
	);
}

export default App;
