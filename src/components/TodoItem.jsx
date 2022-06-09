import { Box, Button, TableCell, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
	const [editable, setEditable] = useState(false);
	const [name, setName] = useState(todo.name);
	const [name2, setName2] = useState(todo.name2);
	let dispatch = useDispatch();
	return (
		<>
			<TableRow>
				<TableCell component="th" scope="row">
					<Typography variant="h4">
						{todo.id.length > 1 ? todo.id[2] : todo.id}
					</Typography>
				</TableCell>
				<TableCell>
					{editable ? (
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					) : (
						<Typography variant="h4">{todo.name}</Typography>
					)}
				</TableCell>
				<TableCell>
					{" "}
					{editable ? (
						<input
							type="number"
							value={name2}
							onChange={(e) => setName2(e.target.value)}
						/>
					) : (
						<Typography variant="h4">{todo.name2}</Typography>
					)}
				</TableCell>
				<TableCell>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-around",
						}}
					>
						<Button
							variant="contained"
							onClick={() => {
								dispatch(updateTodo({ ...todo, name: name, name2: name2 }));
								if (editable) {
									setName(todo.name);
									setName2(todo.name2);
								}
								setEditable(!editable);
							}}
						>
							{editable ? "Updata" : "Edit"}
						</Button>

						<Button
							variant="contained"
							color="error"
							onClick={() => dispatch(deleteTodo(todo.id))}
						>
							delet
						</Button>
					</Box>
				</TableCell>
			</TableRow>

			{/* <div
				style={{
					display: "flex",
					width: "60vw",
					flexDirection: "row",
					// border: "1px solid blue",
					gap: 10,
					margin: "2%",
					textAlign: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="h4">
					{todo.id.length > 1 ? todo.id[2] : todo.id}
				</Typography>

				{editable ? (
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				) : (
					<Typography variant="h4">{todo.name}</Typography>
				)}
				{editable ? (
					<input
						type="number"
						value={name2}
						onChange={(e) => setName2(e.target.value)}
					/>
				) : (
					<Typography variant="h4">{todo.name2}</Typography>
				)}

				<Box
					sx={{
						width: "10vw",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Button
						variant="contained"
						onClick={() => {
							dispatch(updateTodo({ ...todo, name: name, name2: name2 }));
							if (editable) {
								setName(todo.name);
								setName2(todo.name2);
							}
							setEditable(!editable);
						}}
					>
						{editable ? "Updata" : "Edit"}
					</Button>

					<Button
						variant="contained"
						color="error"
						onClick={() => dispatch(deleteTodo(todo.id))}
					>
						delet
					</Button>
				</Box>
			</div> */}
		</>
	);
}

export default TodoItem;
