import React from "react";
import Navbar from "../../components/Navbar";
import Carusel from "../../components/Carusel";
import ImgText from "../../components/ListImg";
import Caruseles from "../../components/Caruseles";
import ReytinCard from "../../components/ReytinCard";
import Card6 from "../../components/Card6";
import AboutMini from "../../components/AboutMini";
import AcardionForm from "../../components/AcardionForm";
import ImgAnimation from "../../components/ImgAnimation";
import { Box, Grid } from "@mui/material";
import Footer from "../../components/Footer";
export default () => (
	<>
		<Box>
			<Navbar />
			<Carusel />
			<ImgText />
			<Caruseles />
			<ReytinCard />
			<ImgAnimation />
			<Card6 />
			<AcardionForm />
			<AboutMini />
			<Footer />
		</Box>
	</>
);
