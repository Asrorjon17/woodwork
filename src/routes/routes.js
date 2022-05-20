import React from "react";
import { Navigate } from "react-router-dom";
import Users from "../views/Users/List";
import Home from "../containers/Home";

export const routes = [
	{
		children: [{ index: true, element: <Home /> }],
	},
];
