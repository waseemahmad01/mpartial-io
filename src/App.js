import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/theme";
import { CssBaseline } from "@material-ui/core";

// import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				{/* <Header /> */}
				<Footer />
			</CssBaseline>
		</ThemeProvider>
	);
};

export default App;
