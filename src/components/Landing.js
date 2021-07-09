import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import video from "../assets/video.mp4";

const useStyles = makeStyles((theme) => ({
	container: {
		height: "100vh",
		position: "relative",
		overflow: "hidden",
	},
	video: {
		position: "absolute",
		width: "1358px",
		height: "763.875px",
		top: "-69.4375px",
		left: "0px",
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
		},
	},
}));
const Landing = () => {
	const classes = useStyles();
	const handleClick = () => {
		window.scrollTo({ top: 564, behavior: "smooth" });
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
				width={1358}
				height={763}
			></video>
			<IconButton disableRipple onClick={handleClick}>
				<ExpandMoreIcon className={classes.down} />
			</IconButton>
		</Grid>
	);
};
export default Landing;
