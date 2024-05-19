import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex flex-col justify-center items-center h-screen">
				HELLO VITE FROM TYPESCRIPT
				<div className="mt-5">
					<ModeToggle />
				</div>
			</div>
		</ThemeProvider>
	);
};

export default App;
