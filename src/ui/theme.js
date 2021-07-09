import { createMuiTheme } from "@material-ui/core/styles";
const green = "#3ac280";
const blue = "#0a5169";
// import image from "../assets/background/hollow.png";
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
	typography: {
		subtitle2: {
			fontSize: "14px",
			fontWeight: 400,
			color: "#fff",
			opacity: "0.7",
		},
		h2: {
			fontFamily: "Helvetica,Arial,Sans-Serif",
			textAlign: "center",
			fontWeight: 400,
			fontSize: "45px",
			lineHeight: "58px",
			letterSpacing: 0,
			color: "#000",
			opacity: 1,
			backgroundSize: "200px 200px",
			backgroundRepeat: "no-repeat",
		},
		subtitile1: {
			display: "block",
			textAlign: "left",
			fontWeight: 400,
			fontSize: "16px",
			lineHeight: "34px",
			letterSpacing: "-.19px",
			color: "#000",
			opacity: 1,
			paddingTop: "19%",
			fontFamily: "Helvetica,Arial,Sans-Serif",
		},
	},
	overrides: {
		MuiFormLabel: {
			root: {
				"&$focused": {
					textTransform: "none",
				},
			},

			focused: {},
		},
	},
});
