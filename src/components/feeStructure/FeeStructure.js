import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import image from "../../assets/background/hollow.png";
import SliderComp from "./SliderComp";
import CardsComp from "./CardsComp";
const useStyles = makeStyles((theme) => ({
	container: {
		padding: "3rem 8rem",
		[theme.breakpoints.down("sm")]: {
			padding: "1.5rem 4rem",
		},
		backgroundColor: "#fff",
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
}));
const FeeStructure = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			justify="center"
			direction="column"
			className={classes.container}
		>
			<Grid item container justify="center">
				<Typography variant="h2" className={classes.h2}>
					Waterfall Fee Structure
				</Typography>
			</Grid>

			<Grid item container justify="center" style={{ padding: "5rem 0rem" }}>
				<SliderComp />
			</Grid>
			<Grid item container>
				<Grid item container justify="space-around" spacing={5}>
					<CardsComp />
				</Grid>
			</Grid>
		</Grid>
	);
};
export default FeeStructure;
