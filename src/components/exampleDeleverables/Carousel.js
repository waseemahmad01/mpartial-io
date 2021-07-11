import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/carousel/1.jpg";
import img2 from "../../assets/carousel/2.jpg";
import img3 from "../../assets/carousel/3.jpg";
import img4 from "../../assets/carousel/4.jpg";
import img5 from "../../assets/carousel/5.jpg";
import img6 from "../../assets/carousel/6.jpg";
import { Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	image: {
		width: "40rem",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	paper: {
		padding: "0rem 6rem",
		backgroundColor: "rgba(10,81,105,.00)",
		[theme.breakpoints.down("md")]: {
			padding: "0rem 3rem",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "0rem 0rem",
		},
	},
}));

const CarouselSlider = () => {
	const classes = useStyles();
	const theme = useTheme();

	const items = [
		{
			image: img1,
		},
		{
			image: img2,
		},
		{
			image: img3,
		},
		{
			image: img4,
		},
		{
			image: img5,
		},
		{
			image: img6,
		},
	];
	return (
		<Carousel
			className={classes.root}
			navButtonsAlwaysVisible
			navButtonsWrapperProps={{
				// Move the buttons to the bottom. Unsetting top here to override default style.
				style: {
					bottom: "0",
					left: "10",
					top: "unset",
				},
			}}
			navButtonsProps={{
				style: {
					backgroundColor: theme.palette.primary.main,
					"&:hover, &:focus": {
						backgroundColor: "red",
					},
				},
			}}
			indicatorIconButtonProps={{
				style: {
					padding: "10px", // 1
					color: "#cbcbcb", // 3
				},
			}}
			activeIndicatorIconButtonProps={{
				style: {
					color: theme.palette.primary.main, // 2
				},
			}}
		>
			{items.map((item, index) => (
				<Item
					key={index}
					image={item.image}
					paperClass={classes.paper}
					className={classes.image}
				/>
			))}
		</Carousel>
	);
};
export default CarouselSlider;

const Item = ({ image, className, paperClass }) => {
	return (
		<Paper className={paperClass} elevation={0}>
			<img src={image} className={className} alt="slider-content" />
		</Paper>
	);
};
