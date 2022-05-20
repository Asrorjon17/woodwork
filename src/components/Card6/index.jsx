import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CarpenterOutlinedIcon from "@mui/icons-material/CarpenterOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import ParkIcon from "@mui/icons-material/Park";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
export default () => {
	return (
		<>
			<Container maxWidth="lg" sx={{ my: "3%" }}>
				<Box sx={{ width: "100%", my: "5%" }}>
					<Box
						sx={{
							width: "100%",
							display: "flex",

							justifyContent: "space-between",
							flexWrap: "wrap",
						}}
					>
						<Box>
							<Typography sx={{ color: "#BFB332" }}>WHY CHOOSE US?</Typography>
							<br />
							<Typography variant="h4" sx={{ fontWeight: "550" }}>
								HIGH QUALITY IS THE STANDARD
							</Typography>
						</Box>
						<Box>
							<Button
								sx={{
									width: "200px",
									bgcolor: "#fff",
									borderRadius: 0,
									px: "5%",
									fontSize: "90%",
									fontWeight: "bold",
									py: "6%",
									color: "#BFB332",
									borderColor: "#BFB332",
									border: 3,
									":hover": {
										borderColor: "#BFB332",
										bgcolor: "#fff",
										border: 3,
									},
								}}
								variant="outlined"
							>
								CONTACT US
							</Button>
						</Box>
					</Box>
				</Box>
				<Grid container spacing={3}>
					{[
						<PersonOutlinedIcon id="icon" />,
						<CarpenterOutlinedIcon id="icon" />,
						<ParkOutlinedIcon id="icon" />,
						<ParkOutlinedIcon id="icon" />,
						<CreateOutlinedIcon id="icon" />,
						<ParkOutlinedIcon id="icon" />,
					].map((item) => (
						<Grid item xs={12} md={6} sm={6} lg={4}>
							<Box sx={{ py: "3%" }} id="box">
								<Box id="d">{item}</Box>

								<Typography
									sx={{ fontWeight: "500", fontWeight: "bold", mt: "2%" }}
								>
									HIGHLY PROFESSIONAL STAFF
								</Typography>
								<br />
								<Typography sx={{ fontSize: "90%" }}>
									We will build & stain the new work so that it looks
									<br />
									and feels like it is original.
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
