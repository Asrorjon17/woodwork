import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
const TodoInput = () => {
	let [name, setName] = useState();
	let [name2, setName2] = useState();
	let dispatch = useDispatch();
	return (
		<>
			<div style={{ width: "40vw", display: "flex", flexDirection: "row" }}>
				<TextField
					fullWidth
					onChange={(e) => setName(e.target.value)}
					value={name}
					id="outlined-basic"
					variant="outlined"
					label="Name"
				/>
				<TextField
					fullWidth
					onChange={(e) => setName2(e.target.value)}
					value={name2}
					id="outlined-basic"
					variant="outlined"
					label="Age"
					type="number"
				/>
				<Button
					variant="contained"
					onClick={() => {
						dispatch(addTodo({ id: uuid(), name: name, name2: name2 }));
						setName("");
						setName2("");
					}}
				>
					Add
				</Button>
			</div>
		</>
	);
};

export default TodoInput;
