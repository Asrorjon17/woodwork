import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import woo from "../../assets/img/w00.webp";
import Map from "../Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
export default () => {
	return (
		<>
			<Box sx={{ bgcolor: "black" }}>
				<Container maxWidth="lg">
					<Box sx={{ color: "white", pt: "5%" }}>
						<Grid container>
							<Grid item xs={12} sm={12} md={6} lg={6}>
								<Box
									sx={{
										width: "100%",
										display: "flex",
										flexDirection: "column",
										gap: 3,
									}}
								>
									<Box>
										<img src={woo} alt="" />
									</Box>
									<Typography>
										Consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida.
									</Typography>
									<Typography>
										<span style={{ color: "#A0A526" }}>Address:</span> 450
										Strand, Charing Cross, London
										<br />
										WC2R 0RG, US
									</Typography>
									<Typography>
										<span style={{ color: "#A0A526" }}>Phone:</span> +44 20 7930
										8205 - +44 20 7839 2323
									</Typography>
									<Typography>
										<span style={{ color: "#A0A526" }}>Email: </span>{" "}
										Support@woodworking.com
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={6}>
								<Map />
							</Grid>
						</Grid>
						<Box sx={{ my: "5%" }} />
						<hr />
						<Box sx={{ my: "3%" }} />

						<Grid container>
							<Grid
								item
								xs={12}
								lg={6}
								sx={{ display: "flex", justifyContent: "center" }}
							>
								<Typography
									sx={{
										display: "flex",
										alignItems: "center",
										flexWrap: "wrap",
									}}
								>
									Copyright ©2022 All rights reserved | This template is made
									with
								</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								lg={3}
								sx={{ display: "flex", justifyContent: "center" }}
							>
								<Typography sx={{ display: "flex", alignItems: "center" }}>
									<FavoriteIcon sx={{ color: "#A0A526" }} /> by Colorlib
								</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								lg={3}
								sx={{ display: "flex", justifyContent: "center" }}
							>
								<Typography
									sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
								>
									Follow us:
									<FacebookIcon /> <TwitterIcon /> <InstagramIcon />
								</Typography>
							</Grid>
							<Box sx={{ my: "2%" }} />
						</Grid>
					</Box>
				</Container>
			</Box>
		</>
	);
};
