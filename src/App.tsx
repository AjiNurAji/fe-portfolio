import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/client/home";
import Dashboard from "./pages/admin/dashboard";
import "./App.css"

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/admin/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
