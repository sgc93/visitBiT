import { motion } from "framer-motion";
import { useState } from "react";
import DragIndicator from "./DragIndicator";
import NavBar from "./NavBar";

export default function Header() {
	const [isDragIndicatorShow, setIsDragIndicatorShown] = useState(false);

	return (
		<motion.div
			className="absolute top-4 left-96 z-[999] flex items-center"
			drag
			dragElastic={0.3}
			onHoverStart={() => setIsDragIndicatorShown(true)}
			onHoverEnd={() => setIsDragIndicatorShown(false)}
		>
			<NavBar />
			<DragIndicator
				isShown={isDragIndicatorShow}
				className={" text-[1.7rem] opacity-70"}
				message={"draggable"}
			/>
		</motion.div>
	);
}
