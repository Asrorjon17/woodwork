import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import navrasm from "../../assets/img/download (1).webp";
import Buttone from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
const Nav = () => {
	return (
		<div>
			<Box sx={{ width: "100%" }}>
				<Container maxWidth="lg">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							paddingY: "2%",
							// border: 1,
						}}
						// className="border-2"
					>
						<Grid container spacing={0}>
							<Grid item lg={4} xs={6} sm={3} md={3} container spacing={0}>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<img src={navrasm} alt="" width="100%" />
								</Box>
							</Grid>
							<Grid item lg={8} xs={6} sm={9} md={9} container spacing={0}>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										width: "100%",
										// border: 1,
									}}
									// className="border-2"
								>
									<Box
										sx={{
											width: "100%",
											// display: "flex",
											justifyContent: "space-around",
											alignItems: "center",
											px: "2%",
											display: { md: "flex", sm: "flex", xs: "none" },
										}}
									>
										{[
											"HOME",
											"ABOUT",
											"SERVICES",
											"PAGES",
											"BLOG",
											"CONTACTS",
										].map((item) => (
											<Link
												href="#"
												underline="none"
												fontSize="90%"
												sx={{
													color: "black",
													borderBottom: 3,
													py: "1.5%",
													borderColor: "white",

													":hover": {
														borderBottomColor: "#BFB332",
													},
													":active": {
														borderBottomColor: "#BFB332",
														transform: "2s",
													},
												}}
											>
												{item}
											</Link>
										))}

										<Button
											sx={{
												display: { md: "flex", xs: "none", sm: "none" },
												bgcolor: "#BFB332",
												borderRadius: 0,
												px: "5%",
												fontWeight: "bold",
												py: "1%",
												":hover": {
													bgcolor: "#BFB332",
												},
											}}
											variant="contained"
											fontSize="90%"
										>
											GET A QUOTE
										</Button>
									</Box>
									<Box
										sx={{
											display: { md: "none", xs: " flex", sm: " none" },
											width: "100%",
											justifyContent: "end",
											marginLeft: "30vw",
											alignItems: "center",
										}}
									>
										<MenuIcon
											fontSize="large"
											sx={{ border: 1, m: "7%", borderRadius: 1 }}
										/>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default Nav;
