import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import image from "../../assets/background/hollow.png";
// import { Slider } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useTheme } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import SliderComp from "./SliderComp";
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
	// root: {
	// 	"& .MuiSlider-rail": {
	// 		backgroundColor: "#dff1eb",
	// 		height: "12px",
	// 		borderRadius: "10px",
	// 	},
	// 	"& .MuiSlider-track": {
	// 		height: "12px",
	// 		borderRadius: "10px",
	// 		alignItems: "center",
	// 		zIndex: 1,
	// 	},
	// 	"& .MuiSlider-thumb": {
	// 		backgroundColor: "#fff",
	// 		border: `4px solid ${theme.palette.primary.main}`,
	// 		height: "30px",
	// 		width: "30px",
	// 		zIndex: 2,
	// 		marginTop: "-10px",
	// 		marginLeft: "-14px",
	// 	},
	// 	"& .MuiSlider-valueLabel": {
	// 		marginLeft: "10px",
	// 		fontSize: "15px",
	// 		"& *": {
	// 			background: theme.palette.secondary.main,
	// 			color: "#fff",
	// 		},
	// 	},
	// 	"& .MuiSlider-mark": {
	// 		color: "transparent",
	// 	},
	// 	"& .MuiSlider-markLabel": {
	// 		marginTop: "1.5rem",
	// 		"&:before": {
	// 			display: "inline-block",
	// 			content: "",
	// 			borderTop: ".3rem solid black",
	// 			width: "4rem",
	// 			margin: "0 1rem",
	// 			transform: "translateY(-1rem)",
	// 		},
	// 	},
	// },
	card: {
		width: "30rem",
		borderRadius: "10px",
		backgroundColor: "rgba(10,81,105,.05)",
		WebkitBoxShadow: "none",
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	cardHeader: {
		"& .MuiCardHeader-title": {
			fontSize: "2rem",
			fontFamily: "Helvetica",
			color: "#fff",
			fontWeight: "400",
		},
	},
	cardIcon: {
		color: "#fff",
	},
	cardContent: {
		textAlign: "center",
	},
	iconCheck: {
		color: theme.palette.primary.main,
		fontSize: "15px",
		marginRight: "5px",
	},
}));
const FeeStructure = () => {
	const classes = useStyles();
	const theme = useTheme();
	// const marks = [
	// 	{
	// 		value: 0,
	// 		label: "$0",
	// 	},
	// 	{
	// 		value: 25,
	// 		label: "$250,000",
	// 	},
	// 	{
	// 		value: 50,
	// 		label: "$50,000",
	// 	},
	// 	{
	// 		value: 75,
	// 		label: "$750,000",
	// 	},
	// 	{
	// 		value: 100,
	// 		label: "$1M+",
	// 	},
	// ];
	// const valuetext = (value) => {
	// 	return `this is the value ${value}°C`;
	// };
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
					<Grid item container justify="flex-end" xs>
						<Card className={classes.card}>
							<CardHeader
								style={{
									backgroundColor: theme.palette.primary.main,
									borderRadius: "10px",
								}}
								className={classes.cardHeader}
								title="Trail Plan"
								action={
									<IconButton>
										<InfoOutlinedIcon className={classes.cardIcon} />
									</IconButton>
								}
							/>
							<CardContent className={classes.cardContent}>
								<Typography variant="h3">4.73%</Typography>
								<Grid
									container
									style={{
										maxWidth: "14rem",
										marginRight: "auto",
										marginLeft: "auto",
									}}
								>
									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Access to mpartial engine
										</Typography>
									</Grid>
									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Minimum $750 initial deposit
										</Typography>
									</Grid>
								</Grid>
								<Typography
									variant="h3"
									style={{ fontSize: "25px", paddingTop: "6rem" }}
								>
									Free
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item container justify="flex-start" xs>
						<Card className={classes.card}>
							<CardHeader
								style={{
									backgroundColor: theme.palette.secondary.main,
									borderRadius: "10px",
								}}
								className={classes.cardHeader}
								title="Enterprise Plan"
								action={
									<IconButton disableRipple>
										<InfoOutlinedIcon className={classes.cardIcon} />
									</IconButton>
								}
							/>
							<CardContent className={classes.cardContent}>
								<Typography variant="h3">6.67%</Typography>
								<Grid
									container
									justify="center"
									style={{
										maxWidth: "14rem",
										marginRight: "auto",
										marginLeft: "auto",
									}}
								>
									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Access to mpartial engine
										</Typography>
									</Grid>
									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Discounted fee schedule
										</Typography>
									</Grid>
									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Unlimited collaborators
										</Typography>
									</Grid>
									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Dedicated amount manager
										</Typography>
									</Grid>
									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Prioritized turnaround time
										</Typography>
									</Grid>

									<Grid item container justify="flex-start">
										<CheckCircleOutlineOutlinedIcon
											className={classes.iconCheck}
										/>
										<Typography variant="h4">
											Minimum $750 initial deposit
										</Typography>
									</Grid>
								</Grid>
								<Typography
									variant="h3"
									style={{
										fontSize: "25px",
										paddingTop: "2rem",
										paddingBottom: "4rem",
									}}
								>
									$495/month
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default FeeStructure;
