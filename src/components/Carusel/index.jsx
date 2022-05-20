import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import bannera from "../../assets/img/banner2.jpg";
import "./styles.css";
import Buttone from "../Button";
// import required modules
import { Navigation } from "swiper";
import { Box, Container, Typography } from "@mui/material";

export default () => {
	return (
		<Swiper>
			<SwiperSlide>
				<Container
					maxWidth="md"
					sx={{ backgroundColor: "transparent", my: "13%" }}
				>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							backgroundColor: "transparent",
							color: "white",
							gap: "15px",
							px: "10%",
						}}
					>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							NEW{" "}
						</Typography>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							{" "}
							CONSTRUCTION{" "}
						</Typography>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							{" "}
							REMODELING,{" "}
						</Typography>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							{" "}
							ADDITIONS{" "}
						</Typography>
					</Box>
					<br />
					<Buttone title="CONTACT US" />
				</Container>
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<Container
					maxWidth="md"
					sx={{ backgroundColor: "transparent", my: "13%" }}
				>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							backgroundColor: "transparent",
							color: "white",
							gap: "15px",
							px: "10%",
						}}
					>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							NEW{" "}
						</Typography>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							{" "}
							CONSTRUCTION{" "}
						</Typography>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							{" "}
							REMODELING,{" "}
						</Typography>
						<Typography sx={{ fontSize: "300%", fontWeight: "bold" }}>
							{" "}
							ADDITIONS{" "}
						</Typography>
					</Box>
					<br />

					<Buttone title="CONTACT US" />
				</Container>
			</SwiperSlide>
		</Swiper>
	);
};
