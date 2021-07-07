import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	btn: {
		fontSize: "14px",
		color: "#ffffff",
		textTransform: "none",
		border: "1px solid transparent",
		boxShadow: "none",
		borderRadius: "20px",
		fontWeight: 400,
		padding: "5px 25px",
		marginLeft: "1rem",
	},
	large: {
		fontSize: "16px",
		color: "#ffffff",
		textTransform: "none",
		border: "1px solid transparent",
		boxShadow: "none",
		borderRadius: "20px",
		fontWeight: 400,
		padding: "5px 30px",
		marginLeft: "1rem",
	},
}));
const CustomButton = ({ children, variant, disabled = false, large }) => {
	const classes = useStyles();
	return (
		<Button
			className={large ? classes.large : classes.btn}
			disabled={disabled}
			variant={variant}
			color="primary"
		>
			{children}
		</Button>
	);
};

export default CustomButton;
