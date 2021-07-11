import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const useStyles = makeStyles((theme) => ({
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
const CardsComp = () => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<React.Fragment>
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
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
								<Typography variant="h4">Access to mpartial engine</Typography>
							</Grid>
							<Grid item container justify="flex-start">
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
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
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
								<Typography variant="h4">Access to mpartial engine</Typography>
							</Grid>
							<Grid item container justify="flex-start">
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
								<Typography variant="h4">Discounted fee schedule</Typography>
							</Grid>
							<Grid item container justify="flex-start">
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
								<Typography variant="h4">Unlimited collaborators</Typography>
							</Grid>
							<Grid item container justify="flex-start">
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
								<Typography variant="h4">Dedicated amount manager</Typography>
							</Grid>
							<Grid item container justify="flex-start">
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
								<Typography variant="h4">
									Prioritized turnaround time
								</Typography>
							</Grid>

							<Grid item container justify="flex-start">
								<CheckCircleOutlineOutlinedIcon className={classes.iconCheck} />
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
		</React.Fragment>
	);
};
export default CardsComp;
