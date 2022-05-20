import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import rasm1 from "../../assets/img/11.jpg";
import rasm2 from "../../assets/img/22.jpg";
import rasm3 from "../../assets/img/33.jpg";
import rasm4 from "../../assets/img/44.jpg";
import StarIcon from "@mui/icons-material/Star";
const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
	},
};
const data = [
	{ img: rasm1, text1: "EXTERIOP  ", text2: "DESIGN" },
	{ img: rasm2, text1: "MOLDINGGS", text2: " & TRIM" },
	{ img: rasm3, text1: "OFFICE ", text2: "FUNITURE" },
	{ img: rasm1, text1: "EXTERIOP  ", text2: "DESIGN" },
	{ img: rasm2, text1: "MOLDINGGS ", text2: "& TRIM" },
	{ img: rasm3, text1: "OFFICE", text2: " FUNITURE" },
];
const Mencard = data.map((item) => (
	<Box
		sx={{
			width: "100%",
			displey: "felx",
			justifyContent: "center",
		}}
	>
		<Box
			sx={{
				backgroundImage: `url(${item.img})`,

				backgroundSize: "cover",
				width: "100%",
				flexDirection: "row",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				py: "70%",
				// height: "90vh",
			}}
		>
			<Typography
				sx={{
					display: "flex",
					bgcolor: "white",
					color: "black",

					height: "50px",
					borderRadius: 50,
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
					p: "4%",
					px: "5%",
					":hover": { bgcolor: "#BFB332", color: "white" },
				}}
				fontSize="h3"
				fontWeight="bold"
			>
				{item.text1}
				<br />
				{item.text2}
			</Typography>
		</Box>
	</Box>
));

const Gallery = () => {
	return (
		<>
			<Box sx={{ paddingY: "10px" }}>
				<Carousel responsive={responsive}>{Mencard}</Carousel>
			</Box>
		</>
	);
};
export default Gallery;
