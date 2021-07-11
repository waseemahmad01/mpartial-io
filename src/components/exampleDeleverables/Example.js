import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import image from "../../assets/background/hollow.png";
import CarouselSlider from "./Carousel";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

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
	h5: {
		fontSize: "2rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1.7rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
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
			id="example"
		>
			<Grid item container justify="center">
				<Typography variant="h2" className={classes.h2}>
					Example Deliverables
				</Typography>
			</Grid>
			<Grid
				item
				container
				justify="center"
				style={{ padding: "3rem 0rem" }}
			></Grid>
			<Grid item container justify="center">
				<CarouselSlider />
			</Grid>
			<Grid item container justify="center" style={{ padding: "3rem 0rem" }}>
				<Typography variant="h5" className={classes.h5}>
					MATTERPORT TRUEPLAN™ FOR XACTIMATE™
				</Typography>
			</Grid>
			<Grid item container justify="center" spacing={3}>
				<Grid item container justify="flex-start" xs={12} md={6}>
					<img
						src={image1}
						alt="work-1"
						style={{ width: "100%", borderRadius: "20px" }}
					/>
				</Grid>
				<Grid item container justify="flex-start" xs={12} md={6}>
					<img
						src={image2}
						alt="work-2"
						style={{ width: "100%", borderRadius: "20px" }}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Example;
