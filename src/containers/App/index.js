import React from "react";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";

const App = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				margin: "5%",
			}}
		>
			<TodoInput />
			<TodoList />
		</div>
	);
};

export default App;
