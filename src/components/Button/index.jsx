import { Button } from "@mui/material";
import React from "react";

export default (props) => {
	return (
		<Button
			sx={{
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
			{props.title}
		</Button>
	);
};
