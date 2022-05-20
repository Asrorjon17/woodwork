import React from "react";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";

import { Box, Grid } from "@mui/material";

export default () => {
	const content = useRoutes(routes);
	return <>{content}</>;
};
