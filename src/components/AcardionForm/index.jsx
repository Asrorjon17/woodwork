import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import InputBase from "@mui/material/InputBase";
import Buttone from "../Button";

const Accordiona = () => {
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<>
			<Box sx={{ bgcolor: "#F9F4EF", width: "100%", py: "2%" }}>
				<Container maxWidth="lg" sx={{ marginY: "3%" }}>
					<Box sx={{ marginY: "6%", textAlign: "center" }}>
						<Typography sx={{ color: "#BFB332" }}>
							FREQUENTLY ASK QUESTIONS
						</Typography>
						<br />

						<Typography variant="h4" fontWeight="bold">
							LOOKING FOR AN ANSWER?
						</Typography>
					</Box>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} md={7} lg={7}>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
								{" "}
								<Accordion
									expanded={expanded === "panel1"}
									onChange={handleChange("panel1")}
								>
									<AccordionSummary
										expandIcon={<AddIcon sx={{ color: "#BFB332" }} />}
										aria-controls="panel1a-content"
										id="panel1a-header"
										sx={{ bgcolor: "#fff", p: "2%" }}
									>
										<Typography fontWeight="bold">
											Why is it Important to Choose an Experienced Joiner?
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											When it comes to selecting a joiner to carry out carpentry
											work in your home it is important that you choose one who
											you can trust. However, one consideration is more
											important than most when it comes to making this decision
											and that is precision. While it is true that precise
											detailing is a vital part of any good carpentry service.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion sx={{ my: "1.7%" }}>
									<AccordionSummary
										expandIcon={<AddIcon sx={{ color: "#BFB332" }} />}
										aria-controls="panel2a-content"
										id="panel2a-header"
										sx={{ bgcolor: "#fff", p: "2%" }}
									>
										<Typography fontWeight="bold">
											Do I Need To Have Everything Picked Out Before Scheduling?
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit amet blandit leo
											lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion sx={{ my: "1.7%" }}>
									<AccordionSummary
										expandIcon={<AddIcon sx={{ color: "#BFB332" }} />}
										aria-controls="panel2a-content"
										id="panel2a-header"
										sx={{ bgcolor: "#fff", p: "2%" }}
									>
										<Typography fontWeight="bold">
											What things about Social Media will be discussed?
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit amet blandit leo
											lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
								<Accordion sx={{ my: "1.7%" }}>
									<AccordionSummary
										expandIcon={<AddIcon sx={{ color: "#BFB332" }} />}
										aria-controls="panel2a-content"
										id="panel2a-header"
										sx={{ bgcolor: "#fff", p: "2%" }}
									>
										<Typography fontWeight="bold">
											Can’t I Just Do the Carpentry Work Myself?
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit amet blandit leo
											lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
							</Box>
						</Grid>
						<Grid item xs={12} sm={12} md={5} lg={5}>
							<Box
								sx={{
									width: "100%",
									bgcolor: "white",
									p: "7%",
									display: "flex",
									flexDirection: "column",
									gap: 2,
								}}
							>
								<Typography fontWeight="bold" fontSize="110%">
									YOU HAVE A QUESTION? CONTACT WITH US!
								</Typography>
								<InputBase
									sx={{ py: "2%", px: "4%", border: 1, width: "100%" }}
									placeholder="Your name"
									inputProps={{ "aria-label": "search google maps" }}
								/>

								<InputBase
									sx={{ py: "2%", px: "4%", border: 0.1, width: "100%" }}
									placeholder="Your email"
									inputProps={{ "aria-label": "search google maps" }}
								/>

								<InputBase
									sx={{ py: "2%", px: "4%", border: 0.1, width: "100%" }}
									placeholder="Website"
									inputProps={{ "aria-label": "search google maps" }}
								/>
								<InputBase
									sx={{
										py: "2%",
										px: "4%",
										border: 0.1,
										width: "100%",
										pb: "25%",
									}}
									placeholder="Write querts here"
									inputProps={{ "aria-label": "search google maps" }}
								/>

								<Button
									sx={{
										bgcolor: "#BFB332",
										borderRadius: 0,
										px: "5%",
										fontWeight: "bold",
										py: "3%",
										":hover": {
											bgcolor: "#BFB332",
										},
										width: "100%",
									}}
									variant="contained"
									fontSize="90%"
								>
									SUBMIT QUESTION
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Accordiona;
