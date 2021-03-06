import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import image from "../assets/background/hollow.png";
import { TextField } from "@material-ui/core";
import CustomButton from "../ui/CustomButton";
import Recaptcha from "react-recaptcha";

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
	formContainer: {
		width: "100%",
		paddingTop: "1.5rem",
	},
	input: {
		width: "100%",
		marginBottom: "3.65rem",
		[theme.breakpoints.down("sm")]: {
			marginBottom: "2rem",
		},
		borderColor: "#000",
		[`& fieldset`]: {
			borderRadius: "10px",
		},
		"&:focus": {
			backgroundColor: "transparent",
		},
	},
}));

const ContactForm = () => {
	const classes = useStyles();
	const [contact, setContact] = useState({
		name: "",
		email: "",
		cell: "",
		message: "",
	});
	const [isVerified, setIsVerified] = useState(false);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prev) => ({ ...prev, [name]: value }));
	};
	const submit = () => {
		if (
			contact.name.trim().length !== 0 &&
			contact.email.trim().length !== 0 &&
			contact.cell.trim().length !== 0 &&
			contact.message.trim().length !== 0
		) {
			alert("form submitted");
		} else {
			alert("invalid entries");
		}
	};
	return (
		<Grid container justify="center" className={classes.container} id="contact">
			<Grid item>
				<Typography variant="h2" className={classes.h2}>
					Contact Us
				</Typography>
			</Grid>
			<Grid item container>
				<form className={classes.formContainer}>
					<Grid item container spacing={4}>
						<Grid item xs={12} md={6}>
							<TextField
								variant="outlined"
								className={classes.input}
								label="Name"
								name="name"
								value={contact.name}
								onChange={handleChange}
								type="text"
							/>
							<TextField
								variant="outlined"
								className={classes.input}
								label="Email"
								name="email"
								value={contact.email}
								onChange={handleChange}
								type="email"
							/>
							<TextField
								variant="outlined"
								className={classes.input}
								label="Cell"
								name="cell"
								value={contact.cell}
								onChange={handleChange}
								type="tel"
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								variant="outlined"
								classes={{ root: classes.input }}
								label="Write your message"
								rows="13"
								multiline
								name="message"
								value={contact.message}
								onChange={handleChange}
								type="text"
							/>
						</Grid>
					</Grid>
				</form>
			</Grid>
			<Grid item container justify="center">
				<Recaptcha
					sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
					render="explicit"
					onloadCallback={() => console.log("recaptcha")}
					verifyCallback={() => setIsVerified(true)}
				/>
			</Grid>
			<Grid item container justify="center" style={{ paddingTop: "1rem" }}>
				<CustomButton
					variant="contained"
					large
					onSubmit={submit}
					disabled={isVerified ? false : true}
				>
					Submit
				</CustomButton>
			</Grid>
		</Grid>
	);
};
export default ContactForm;
