import { motion } from "framer-motion";
import { MdOutlineMyLocation } from "react-icons/md";
export default function CurrentLoc({ dragConstraint }) {
	return (
		<motion.div
			drag
			dragElastic={0.3}
			dragConstraints={dragConstraint}
			className="glassmorphism absolute bottom-28 right-5 z-[999] p-1 rounded-lg text-xl text-blue-900 transition-all duration-300 hover:border-blue-900 hover:bg-blue-900 hover:text-stone-200"
		>
			<MdOutlineMyLocation className="" />
		</motion.div>
	);
}
