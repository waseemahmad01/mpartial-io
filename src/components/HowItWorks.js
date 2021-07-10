import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import image from "../assets/background/hollow.png";
import image2 from "../assets/background/circle.png";
import CustomButton from "../ui/CustomButton";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "3rem 8rem",
		[theme.breakpoints.down("sm")]: {
			padding: "1.5rem 4rem",
		},
		backgroundColor: "rgba(10,81,105,.05)",
	},
	h2: {
		lineHeight: "200px",
		backgroundPosition: "50%",
		backgroundImage: `url(${image})`,
		[theme.breakpoints.down("sm")]: {
			fontSize: "35px",
			backgroundSize: "165px 165px",
		},
	},
	backgroundImage: {
		...theme.typography.h2,
		textAlign: "left",
		backgroundPosition: "bottom",
		backgroundImage: `url(${image2})`,
		fontFamily: "Helvetica,Arial,Sans-Serif",
		fontWeight: 700,
		fontSize: "167px",
		lineHeight: "87px",
		letterSpacing: 0,
		color: "#0a5169",
		opacity: 1,
		minHeight: "143px",
		minWidth: "130px",
		backgroundSize: "100px 100px",
	},
}));

const HowItWorks = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			justify="center"
			direction="column"
			className={classes.container}
		>
			<Grid item container justify="center" style={{ paddingBottom: "4rem" }}>
				<Typography variant="h2" className={classes.h2}>
					How It Works
				</Typography>
			</Grid>
			<Grid item container direction="row" style={{ padding: "2rem 0rem" }}>
				<Grid item container xs={12} md={4}>
					<Grid item>
						<div className={classes.backgroundImage}>1</div>
					</Grid>
					<Grid item xs>
						Perform pre-mitigation and post-mitigation scans with a Matterport
						Pro Series camera.
					</Grid>
				</Grid>
				<Grid item container xs={12} md={4}>
					<Grid item>
						<div className={classes.backgroundImage}>2</div>
					</Grid>
					<Grid item xs>
						Perform pre-mitigation and post-mitigation scans with a Matterport
						Pro Series camera.
					</Grid>
				</Grid>
				<Grid item container xs={12} md={4}>
					<Grid item>
						<div className={classes.backgroundImage}>3</div>
					</Grid>
					<Grid item xs>
						Perform pre-mitigation and post-mitigation scans with a Matterport
						Pro Series camera.
					</Grid>
				</Grid>
			</Grid>
			<Grid item container justify="center">
				<CustomButton variant="contained" large>
					Get Started
				</CustomButton>
			</Grid>
		</Grid>
	);
};

export default HowItWorks;
