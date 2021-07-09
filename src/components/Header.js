import React, { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import CustomButton from "../ui/CustomButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core";
import MenuButton from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
	nav: {
		backgroundColor: "transparent",
		borderBottom: "0.5px solid #ffffff",
		transition: "0.6s ease",
	},
	navLight: {
		backgroundColor: "#ffffff",
		borderBottom: "0.5px solid #ffffff",
		transition: "0.6s ease",
	},
	toolbar: {
		padding: "0px 8rem",
		[theme.breakpoints.down("md")]: {
			padding: "0px 4rem",
		},
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
		color: "#fff",
		opacity: 1,
		minWidth: 5,
		textTransform: "none",
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	tabsLight: {
		color: "#000",
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
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	drawerIcon: {
		color: "#000",
		[theme.breakpoints.down("md")]: {
			height: "45px",
			width: "45px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "35px",
			width: "35px",
		},
	},
	drawer: {
		backgroundColor: "#fff",
		marginTop: "4rem",
		position: "absolute",
		left: 0,
		width: "100%",
		[theme.breakpoints.down("md")]: {
			top: "6px",
		},
		[theme.breakpoints.down("xs")]: {
			top: "-4px",
		},
		paddingBottom: "1rem",
		display: "none",
		opacity: 0,
	},
	show: {
		display: "flex",
		opacity: 1,
		transition: "0.6s ease",
	},
}));

const Header = () => {
	const classes = useStyles();
	const [light, setLight] = useState(false);
	const [value, setValue] = useState(0);

	const [openDrawer, setOpenDrawer] = useState(false);
	const theme = useTheme();
	const mobileView = useMediaQuery(theme.breakpoints.down("md"));

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleScroll = () => {
		if (window.scrollY >= "335") {
			setLight(true);
		} else {
			setLight(false);
		}
		console.log(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const UseTabs = () => {
		return (
			<React.Fragment>
				<Tabs
					value={value}
					onChange={handleChange}
					textColor="primary"
					className={classes.tabsContainer}
					classes={{ indicator: classes.indicator }}
				>
					<Tab
						label="Ground-Truth Data"
						className={`${classes.tabs} ${
							light ? classes.tabsLight : undefined
						}`}
						disableRipple
					/>
					<Tab
						label="How it works"
						className={`${classes.tabs} ${
							light ? classes.tabsLight : undefined
						}`}
						disableRipple
					/>
					<Tab
						label="Fee Structure"
						className={`${classes.tabs} ${
							light ? classes.tabsLight : undefined
						}`}
						disableRipple
					/>
					<Tab
						label="Example Deliverables"
						className={`${classes.tabs} ${
							light ? classes.tabsLight : undefined
						}`}
						disableRipple
					/>
					<Tab
						label="Submission Portal"
						className={`${classes.tabs} ${
							light ? classes.tabsLight : undefined
						}`}
						disableRipple
					/>
					<Tab
						label="Contact Us"
						className={`${classes.tabs} ${
							light ? classes.tabsLight : undefined
						}`}
						disableRipple
					/>
				</Tabs>
				<CustomButton variant="contained">Sign In</CustomButton>
			</React.Fragment>
		);
	};

	const UseDrawer = () => {
		return (
			<React.Fragment>
				<Grid
					container
					className={`${classes.drawer} ${
						openDrawer ? classes.show : undefined
					}`}
					direction="column"
					justify="center"
					alignItems="center"
				>
					<Grid item>
						<Tabs
							value={value}
							onChange={handleChange}
							textColor="primary"
							orientation="vertical"
							className={classes.tabsContainer}
							classes={{ indicator: classes.indicator }}
						>
							<Tab
								label="Ground-Truth Data"
								className={classes.tabsLight}
								disableRipple
							/>
							<Tab
								label="How it works"
								className={classes.tabsLight}
								disableRipple
							/>
							<Tab
								label="Fee Structure"
								className={classes.tabsLight}
								disableRipple
							/>
							<Tab
								label="Example Deliverables"
								className={classes.tabsLight}
								disableRipple
							/>
							<Tab
								label="Submission Portal"
								className={classes.tabsLight}
								disableRipple
							/>
							<Tab
								label="Contact Us"
								className={classes.tabsLight}
								disableRipple
							/>
						</Tabs>
					</Grid>

					<CustomButton variant="contained">Sign In</CustomButton>
				</Grid>
				<IconButton
					onClick={() => setOpenDrawer(!openDrawer)}
					disableRipple
					className={classes.drawerIconContainer}
				>
					<MenuButton className={classes.drawerIcon} />
				</IconButton>
			</React.Fragment>
		);
	};

	return (
		<AppBar
			className={`${mobileView ? classes.navLight : classes.nav} ${
				light ? classes.navLight : undefined
			}`}
		>
			<Toolbar disableGutters className={classes.toolbar}>
				<Button className={classes.logo} disableRipple>
					<img src={logo} className={classes.logoImage} alt="brand-logo" />
				</Button>
				{mobileView ? <UseDrawer /> : <UseTabs />}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
