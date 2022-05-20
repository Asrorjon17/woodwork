import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bannera from "../../assets/img/bannerMini.jpg";
import Buttone from "../Button";
export default () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					backgroundImage: `url(${bannera})`,
					backgroundRepeat: "no-repeat",
					// backgroundRepeat: "repeat-X",
					backgroundSize: "cover",
					// backgroundAttachment: "local",
				}}
			>
				<Container maxWidth="lg">
					<Box
						sx={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							px: "10%",
							py: "13%",
						}}
					>
						<Typography
							sx={{
								color: "white",
								fontSize: "230%",
								fontWeight: "bold",
								mb: "1.5%",
							}}
						>
							CHOOSE A FLOOR TYPE FOR YOUR HOME REMODELING PROJECT
						</Typography>
						<Buttone title="START YOUR PROJECT" />
					</Box>
				</Container>
			</Box>
		</>
	);
};
