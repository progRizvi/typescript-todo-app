import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Todo = ({
	todo,
	removeTodo
}: {
	todo: { title: string; body: string };
	removeTodo: (todo: { title: string; body: string }) => void;
}) => {
	return (
		<>
			<Box sx={{ display: "flex" }}>
				<Typography sx={{ mr: 3 }} variant="h6">
					Title: {todo.title}
				</Typography>
				<Typography variant="subtitle1">Body: {todo.body}</Typography>
				<Button
					variant="outlined"
					color="error"
					onClick={() => removeTodo(todo)}
				>
					Remove
				</Button>
			</Box>
		</>
	);
};

export default Todo;
