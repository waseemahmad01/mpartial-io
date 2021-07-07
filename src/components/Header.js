import React, { useState } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import CustomButton from "../ui/CustomButton";

import { makeStyles } from "@material-ui/core";

import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
	nav: {
		backgroundColor: "transparent",
		borderBottom: "1px solid #ffffff",
	},
	toolbar: {
		padding: "0px 8rem",
	},
	logoImage: {
		height: "1.9rem",
	},
	logo: {
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabsContainer: {
		marginLeft: "auto",
	},
	tabs: {
		textAlign: "center",
		fontWeight: 500,
		fontSize: "12px",
		letterSpacing: 0,
		opacity: 1,
		minWidth: 5,
		textTransform: "none",
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	indicator: {
		backgroundColor: "transparent",
	},
}));

const Header = () => {
	const classes = useStyles();

	const [value, setValue] = useState(0);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};
	return (
		<AppBar className={classes.nav}>
			<Toolbar disableGutters className={classes.toolbar}>
				<Button className={classes.logo} disableRipple>
					<img src={logo} className={classes.logoImage} alt="brand-logo" />
				</Button>
				<Tabs
					value={value}
					onChange={handleChange}
					textColor="primary"
					className={classes.tabsContainer}
					classes={{ indicator: classes.indicator }}
				>
					<Tab
						label="Ground-Truth Data"
						className={classes.tabs}
						disableRipple
					/>
					<Tab label="How it works" className={classes.tabs} disableRipple />
					<Tab label="Fee Structure" className={classes.tabs} disableRipple />
					<Tab
						label="Example Deliverables"
						className={classes.tabs}
						disableRipple
					/>
					<Tab
						label="Submission Portal"
						className={classes.tabs}
						disableRipple
					/>
					<Tab label="Contact Us" className={classes.tabs} disableRipple />
				</Tabs>
				<CustomButton variant="contained">Sign In</CustomButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
