import { motion } from "framer-motion";
import { useState } from "react";
import DragIndicator from "./DragIndicator";
import NavBar from "./NavBar";

export default function Header({ dragConstraint }) {
	const [isDragIndicatorShow, setIsDragIndicatorShown] = useState(false);

	return (
		<motion.div
			className="absolute top-4 left-96 z-[999] flex items-start"
			drag
			dragElastic={0.3}
			dragConstraints={dragConstraint}
			onHoverStart={() => setIsDragIndicatorShown(true)}
			onHoverEnd={() => setIsDragIndicatorShown(false)}
		>
			<NavBar />
			<DragIndicator isShown={isDragIndicatorShow} />
		</motion.div>
	);
}
