import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	btn: {
		fontSize: "14px",
		color: "#ffffff",
		textTransform: "none",
		border: "1px solid #3ac280",
		boxShadow: "none",
		borderRadius: "20px",
		fontWeight: 400,
		padding: "5px 25px",
		marginLeft: "1rem",
	},
}));
const CustomButton = ({ title }) => {
	const classes = useStyles();
	return (
		<Button className={classes.btn} variant="contained" color="primary">
			{title}
		</Button>
	);
};

export default CustomButton;
