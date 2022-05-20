import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import name1 from "../../assets/img/111.jpg";
import name2 from "../../assets/img/222.jpg";
import name3 from "../../assets/img/333.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./index.css";
export default () => {
	return (
		<>
			<Grid container>
				<Grid item xs={12} md={6} lg={4} sm={6}>
					<Box
						sx={{
							backgroundImage: `url(${name1})`,

							backgroundSize: "cover",
							height: "90vh",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						className="bigbox"
					>
						<Box className="box">
							<Typography
								sx={{
									bgcolor: "#BFB332",
									color: "white",

									borderRadius: 50,
									alignItems: "center",
									justifyContent: "center",

									flexDirection: "column",
								}}
								className="text1"
							>
								KINGLEY MANSION STAIRS
								<Typography
									sx={{
										fontSize: "7px",
										display: "flex",
										alignItems: "center",
									}}
								>
									{" "}
									<LocationOnIcon sx={{ fontSize: "150%" }} /> 450 Strand,
									Charing Cross, London
								</Typography>
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} sm={6} lg={4}>
					<Box
						sx={{
							backgroundImage: `url(${name3})`,

							backgroundSize: "cover",
							height: "90vh",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						className="bigbox"
					>
						<Box className="box">
							<Typography
								sx={{
									bgcolor: "#BFB332",
									color: "white",

									borderRadius: 50,
									alignItems: "center",
									justifyContent: "center",

									flexDirection: "column",
								}}
								className="text1"
							>
								KINGLEY MANSION STAIRS
								<Typography
									sx={{
										fontSize: "7px",
										display: "flex",
										alignItems: "center",
									}}
								>
									{" "}
									<LocationOnIcon sx={{ fontSize: "150%" }} /> 450 Strand,
									Charing Cross, London
								</Typography>
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} lg={4} sm={6}>
					<Box
						sx={{
							backgroundImage: `url(${name2})`,

							backgroundSize: "cover",
							height: "90vh",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						className="bigbox"
					>
						<Box className="box">
							<Typography
								sx={{
									bgcolor: "#BFB332",
									color: "white",

									borderRadius: 50,
									alignItems: "center",
									justifyContent: "center",

									flexDirection: "column",
								}}
								className="text1"
							>
								KINGLEY MANSION STAIRS
								<Typography
									sx={{
										fontSize: "7px",
										display: "flex",
										alignItems: "center",
									}}
								>
									{" "}
									<LocationOnIcon sx={{ fontSize: "150%" }} /> 450 Strand,
									Charing Cross, London
								</Typography>
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};
