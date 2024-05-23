import { Cat } from "lucide-react";
import { Link } from "react-router-dom";
import NavMenu from "./nav-menu";
import { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
	const [scroller, setScroller] = useState<number>(0);
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scroll = scrollY;
			setScroller(scroll);
		});
	}, []);

	useEffect(() => {
		if (scroller > 0) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [scroller]);

	return (
		<nav
			className={`flex justify-between items-center z-[9999999] fixed w-full bg-background text-foreground transition-all duration-300 ease-in-out container top-0${
				active ? " h-16 shadow-md border-b border-border" : " h-14"
			}`}
		>
			<Link className="flex gap-1 items-center" to="/">
				<Cat />{" "}
				<span className="text-lg font-medium capitalize">thisme</span>
			</Link>
			<NavMenu />
			<ModeToggle />
		</nav>
	);
};

export default Navbar;
