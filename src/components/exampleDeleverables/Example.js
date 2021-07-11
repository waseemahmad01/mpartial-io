import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import image from "../../assets/background/hollow.png";
import CarouselSlider from "./Carousel";

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
}));
const Example = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			justify="center"
			direction="colomn"
			className={classes.container}
		>
			<Grid item container justify="center">
				<Typography variant="h2" className={classes.h2}>
					Example Deliverables
				</Typography>
			</Grid>
			<Grid item container justify="center">
				<CarouselSlider />
			</Grid>
		</Grid>
	);
};

export default Example;
