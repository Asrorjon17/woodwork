import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Container, Grid, Typography } from "@mui/material";
import Buttone from "../Button";

export default function QuiltedImageList() {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					width: "100%",
					paddingY: "4%",
					// border: 1,
				}}
			>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<Grid
							container
							spacing={0.5}
							sx={{ display: "flex", justifyContent: "center" }}
						>
							<Grid item xs={6} sm={6} md={6} lg={6}>
								<img
									src="https://preview.colorlib.com/theme/woodwork/img/about/xabout-1.jpg.pagespeed.ic.Yis_8Gb838.webp"
									alt=""
									width="100%"
									height="90%"
								/>
							</Grid>
							<Grid item xs={6} lg={6}>
								<Box sx={{ display: "flex", flexDirection: "column" }}>
									<Box>
										<img
											src="https://preview.colorlib.com/theme/woodwork/img/about/xabout-2.jpg.pagespeed.ic.AnJ9wuM910.webp"
											alt=""
											width="100%"
										/>
									</Box>
									<Box>
										<img
											src="https://preview.colorlib.com/theme/woodwork/img/about/xabout-3.jpg.pagespeed.ic.PbcgqF3uxa.webp"
											alt=""
											width="100%"
										/>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6} sx={{ py: "2%" }}>
						<Typography
							sx={{ fontSize: "107%", color: "#BFB332", fontWeight: "550" }}
						>
							ABOUT WOODWORKING
						</Typography>
						<Typography sx={{ fontSize: "180%", fontWeight: "550" }}>
							30 YEARS OF WOODWORKING EXPERIENCE.
						</Typography>
						<Typography sx={{ fontFamily: "-moz-initial" }}>
							Our commitment to bring professionalism, good service & trust to
							the home repair service & maintenance business. We take immense
							pride in sending some of the most of professional handymen to
							yours homes to fix things that aren't workings. We have fixed over
							1,150,000 houses in our little over 30 years of existence so far.
						</Typography>
						<Box sx={{ display: "flex", gap: 5, my: "5%" }}>
							<Typography sx={{ fontSize: "90%" }}>
								<Typography
									sx={{
										fontSize: "180%",
										fontWeight: "550",
										fontFamily: "sans-serif",
									}}
								>
									1800 +
								</Typography>
								PROJECT
							</Typography>
							<Typography sx={{ fontSize: "90%" }}>
								<Typography
									sx={{
										fontSize: "180%",
										fontWeight: "550",
										fontFamily: "sans-serif",
									}}
								>
									1200 +
								</Typography>
								CLIENTS
							</Typography>
							<Typography sx={{ fontSize: "90%" }}>
								<Typography
									sx={{
										fontSize: "180%",
										fontWeight: "550",
										fontFamily: "sans-serif",
									}}
								>
									150 +
								</Typography>
								OFFICES
							</Typography>
						</Box>
						<Buttone title="CONTACT US" />
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
