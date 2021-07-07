import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.secondary.main,
		padding: "1rem 8rem",
		[theme.breakpoints.down("sm")]: {
			padding: "1rem",
		},
	},
	iconContainer: {
		display: "inline-block",
		float: "right",
	},
	icon: {
		marginLeft: "8px",
		fontSize: "1.4rem",
		color: "#fff",
		opacity: "0.8",
	},
}));
const Footer = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.footer} container alignItems="center">
			<Grid item xs={8}>
				<Typography variant="subtitle2">
					mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<div className={classes.iconContainer}>
					<a href="https:\\www.facebook.com" target="_blank" rel="noreferrer">
						<FacebookIcon className={classes.icon} />
					</a>
					<a href="https:\\www.twitter.com" target="_blank" rel="noreferrer">
						<TwitterIcon className={classes.icon} />
					</a>
					<a href="https:\\www.linkedin.com" target="_blank" rel="noreferrer">
						<LinkedInIcon className={classes.icon} />
					</a>
				</div>
			</Grid>
		</Grid>
	);
};
export default Footer;
