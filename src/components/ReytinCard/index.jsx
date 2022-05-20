import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import ras from "../../assets/img/44.jpg";
export default () => {
	return (
		<>
			<Container maxWidth="lg">
				<Box sx={{ my: "10%" }}>
					<Grid container spacing={1}>
						<Box sx={{ width: "100%", my: "2%" }}>
							<Grid item xs={12} sm={12} md={12} lg={10} sx={{ p: 0 }}>
								<Box
									sx={{
										p: "5%",

										bgcolor: "#FAF5F0",
										width: "100%",
										position: "relative",
									}}
								>
									<Typography
										sx={{
											fontSize: "157%",
											color: "#BFB332",
											fontWeight: "900",
										}}
									>
										``
									</Typography>
									<Typography variant="h5">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
										<br />
										do eiusmod tempor incididunt ut labore et dolore magna{" "}
										<br /> aliqua. Quis ipsum suspendisse ultrices gravida
										viverra <br />
										maecenas accumsan lacus vel facilisis.
									</Typography>
									<br />
									<Typography sx={{ fontWeight: "bold", fontSize: "100%" }}>
										CHARLES SCHWARTZ
									</Typography>
									<Box
										sx={{
											width: "75%",
											display: "flex",
											justifyContent: "space-between",
										}}
									>
										<Typography>NEW YORK</Typography>

										<Typography>
											<Rating
												sx={{ fontSize: "15px" }}
												name="half-rating-read"
												defaultValue={5}
												precision={0.5}
												readOnly
											/>
										</Typography>
									</Box>
									<Box
										sx={{
											position: "absolute",
											right: -170,
											top: -50,
											display: {
												lg: "flex",
												md: "none",
												sm: "none",
												xs: "none",
											},
										}}
									>
										<img
											src="https://preview.colorlib.com/theme/woodwork/img/testimonial/xtestimonial-1.jpg.pagespeed.ic.8emMOi-GSL.webp"
											alt=""
										/>
									</Box>
									<Box sx={{ display: "flex", gap: 1, my: "2%" }}>
										<hr
											style={{
												border: 0,
												height: "5px",
												background: "#B4B0AD",
												width: "25px",
											}}
										/>
										<hr
											style={{
												border: 0,
												height: "5px",
												background: "#B4B0AD",
												width: "25px",
											}}
										/>
										<hr
											style={{
												border: 0,
												height: "5px",
												background: "#B4B0AD",
												width: "25px",
											}}
										/>
									</Box>
								</Box>
							</Grid>
						</Box>

						<Box
							sx={{
								width: "100%",
								display: { lg: "none", md: "flex" },
								justifyContent: "center",
							}}
						>
							<Grid item xs={12} sm={12} md={12} lg={0}>
								<Box sx={{ width: "100%" }}>
									<img
										src="https://preview.colorlib.com/theme/woodwork/img/testimonial/xtestimonial-1.jpg.pagespeed.ic.8emMOi-GSL.webp"
										alt="https://preview.colorlib.com/theme/woodwork/img/testimonial/xtestimonial-1.jpg.pagespeed.ic.8emMOi-GSL.webp"
										width="100%"
									/>
								</Box>
							</Grid>
						</Box>
					</Grid>
				</Box>
			</Container>
		</>
	);
};
