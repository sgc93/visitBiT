import { useState } from "react";
import MenuIcon from "./MenuIcon";
import SideBarBox from "./SideBarBox";

export default function SideBar({ setPosition }) {
	const [showSideBar, setShowSideBar] = useState(false);

	return (
		<section className="flex flex-col gap-7 absolute top-4 left-4 z-[998]">
			<MenuIcon showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
			{showSideBar && <SideBarBox setPosition={setPosition} />}
		</section>
	);
}
