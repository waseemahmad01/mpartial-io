import { createMuiTheme } from "@material-ui/core/styles";
const green = "#3ac280";
const blue = "#0a5169";
export default createMuiTheme({
	palette: {
		common: {
			green,
			blue,
		},
		primary: {
			main: green,
		},
		secondary: {
			main: blue,
		},
	},
});
