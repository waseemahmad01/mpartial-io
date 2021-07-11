import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import image from "../assets/background/hollow.png";
import img1 from "../assets/a.jpg";
import img2 from "../assets/b.jpg";
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import CustomButton from "../ui/CustomButton";
const useStyles = makeStyles((theme) => ({
	container: {
		padding: "1rem 8rem",
		backgroundColor: "#fff",
		[theme.breakpoints.down("sm")]: {
			padding: "1rem 2rem",
		},
	},
	h2: {
		...theme.typography.h2,
		lineHeight: "68px",
		textAlign: "left",
		width: "100%",
		backgroundPosition: "0px 16px",
		backgroundImage: `url(${image})`,
		[theme.breakpoints.down("sm")]: {
			fontSize: "35px",
			backgroundSize: "165px 165px",
		},
	},
	sectionTitle: {
		marginTop: "6rem",
		textAlign: "left",
		marginLeft: "6rem",
	},
}));
const GroundTruth = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.container} id="gtd">
			<Grid container>
				<Grid item container xs justify="center">
					<div className={classes.h2}>
						<Typography variant="h2" className={classes.sectionTitle}>
							GROUND-TRUTH <br /> DATA EVERYONE <br /> TRUSTS
						</Typography>
					</div>
				</Grid>
				<Grid item container xs justify="center" alignItems="center">
					<Typography variant="subtitle1" style={{ marginTop: "6rem" }}>
						We have combined the best-of-breed technology platforms with an eye
						towards relieving you of administrative burden. Matterport 3D scans
						augmented by TruePlan are used to generate consistent Xactimate
						sheets that are delivered in accord with Actionable Insights
						compliance rule sets. Each mpartial is produced with full
						transparency, unprecedented forensic photography, and infallible
						geospatial data that collectively result in rapid approvals.
					</Typography>
				</Grid>
			</Grid>
			<Grid item container justify="center">
				<ReactCompareSlider
					itemOne={
						<ReactCompareSliderImage src={img1} srcSet={img1} alt="Image one" />
					}
					itemTwo={
						<ReactCompareSliderImage src={img2} srcSet={img2} alt="Image two" />
					}
				/>
			</Grid>
			<Grid item container justify="center">
				<Grid item style={{ marginTop: "2rem" }}>
					<CustomButton variant="contained" large>
						Try Today
					</CustomButton>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default GroundTruth;
