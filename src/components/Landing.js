import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

import video from "../assets/video.mp4";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		position: "relative",
		overflow: "hidden",
		[theme.breakpoints.down("sm")]: {
			height: "55.5vh",
		},
	},
	video: {
		position: "absolute",
		width: "100%",
		top: "-69.4375px",
		left: "0px",
		[theme.breakpoints.down("md")]: {
			top: "70px",
		},
		[theme.breakpoints.down("xs")]: {
			top: "60px",
		},
	},
	down: {
		fontSize: "2.5rem",
		color: "#ffffff",
		opacity: "0.7",
		marginBottom: "3rem",
		"&:hover": {
			opacity: 1,
			fontSize: "3rem",
			Transition: "0.6s ease",
			color: theme.palette.primary.main,
		},
	},
}));
const Landing = () => {
	const classes = useStyles();
	const theme = useTheme();
	const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
	const handleClick = () => {
		scroll.scrollTo(564);
	};
	return (
		<Grid
			container
			className={classes.container}
			justify="center"
			alignItems="flex-end"
		>
			<video
				muted
				playsInline
				autoPlay
				loop
				className={classes.video}
				src={video}
			></video>
			{!mobileView && (
				<IconButton disableRipple disableFocusRipple onClick={handleClick}>
					<ExpandMoreIcon className={classes.down} />
				</IconButton>
			)}
		</Grid>
	);
};
export default Landing;
