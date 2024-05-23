import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button variant="ghost" size="icon" onClick={() => {
			if (theme === "light") {
				setTheme("dark");
			} else if (theme === "dark") {
				setTheme("system")
			} else if (theme === "system") {
				setTheme("light")
			} else {
				setTheme("system")
			}
		}}>
			<Sun className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-in-out ${theme === "light" ? "rotate-[360deg] opacity-100" : "rotate-0 opacity-0"}`} />
			<Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-in-out ${theme === "dark" ? "rotate-[360deg] opacity-100" : "rotate-0 opacity-0"}`} />
			<Monitor className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-in-out ${theme === "system" ? "rotate-[360deg] opacity-100" : "rotate-0 opacity-0"}`} />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
