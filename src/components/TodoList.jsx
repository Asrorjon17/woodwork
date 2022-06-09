import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
const TodoList = () => {
	let todos = useSelector((state) => state);
	return (
		<div>
			<TableContainer component={Paper} sx={{ mt: "3%" }}>
				<Table sx={{ minWidth: 615 }} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>
								<Typography variant="h5">id</Typography>
							</TableCell>
							<TableCell>
								<Typography variant="h5">Name</Typography>
							</TableCell>
							<TableCell>
								<Typography variant="h5">Age</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: "center" }}>
								<Typography variant="h5">Action</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{todos.map((todo) => {
							return <TodoItem key={todo.id} todo={todo} />;
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TodoList;
