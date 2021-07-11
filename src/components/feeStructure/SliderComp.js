import React from "react";
import { makeStyles } from "@material-ui/core";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiSlider-rail": {
			backgroundColor: "#dff1eb",
			height: "12px",
			borderRadius: "10px",
		},
		"& .MuiSlider-track": {
			height: "12px",
			borderRadius: "10px",
			alignItems: "center",
			zIndex: 1,
		},
		"& .MuiSlider-thumb": {
			backgroundColor: "#fff",
			border: `4px solid ${theme.palette.primary.main}`,
			height: "30px",
			width: "30px",
			zIndex: 2,
			marginTop: "-10px",
			marginLeft: "-14px",
		},
		"& .MuiSlider-valueLabel": {
			marginLeft: "10px",
			fontSize: "15px",
			"& *": {
				background: theme.palette.secondary.main,
				color: "#fff",
			},
		},
		"& .MuiSlider-mark": {
			color: "transparent",
		},
		"& .MuiSlider-markLabel": {
			marginTop: "1.5rem",
			"&:before": {
				display: "inline-block",
				content: "",
				borderTop: ".3rem solid black",
				width: "4rem",
				margin: "0 1rem",
				transform: "translateY(-1rem)",
			},
		},
	},
}));
const SliderComp = () => {
	const classes = useStyles();
	const marks = [
		{
			value: 0,
			label: "$0",
		},
		{
			value: 25,
			label: "$250,000",
		},
		{
			value: 50,
			label: "$50,000",
		},
		{
			value: 75,
			label: "$750,000",
		},
		{
			value: 100,
			label: "$1M+",
		},
	];
	const valuetext = (value) => {
		return `this is the value ${value}°C`;
	};
	return (
		<Slider
			getAriaValueText={valuetext}
			aria-labelledby="discrete-slider-always"
			defaultValue={25}
			step={5}
			marks={marks}
			valueLabelDisplay="on"
			color="secondary"
			classes={{
				root: classes.root,
			}}
		/>
	);
};
export default SliderComp;
