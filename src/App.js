import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/theme";
import { CssBaseline } from "@material-ui/core";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Header />
				<Landing />
				<ContactForm />
				<Footer />
			</CssBaseline>
		</ThemeProvider>
	);
};

export default App;
