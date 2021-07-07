import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./ui/theme";

import Header from "./components/Header";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
};

export default App;
