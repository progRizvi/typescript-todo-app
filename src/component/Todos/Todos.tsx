import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Todo from "../Todo/Todo";

type FormValues = {
	title: string;
	body: string;
};

const Todos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
	}, []);

	console.log(todos);

	const { register, handleSubmit, reset } = useForm<FormValues>();
	const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
		console.log(data);
		localStorage.setItem("todos", JSON.stringify([...todos, data]));
		const newData: { title: String; body: String }[] = [...todos, data];
		setTodos(newData as any);
		reset();
	};
	const removeTodo = (todo: { title: string; body: string }) => {
		const data = JSON.parse(localStorage.getItem("todos") || "[]");
		data.splice(data.indexOf(todo), 1);
		localStorage.setItem("todos", JSON.stringify(data));
		setTodos(data);
	};
	return (
		<>
			<Box sx={{ mt: 10 }}>
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": {
							m: 1,
							width: "25ch"
						}
					}}
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Box component="div" sx={{ display: "flex", alignItems: "center" }}>
						<TextField
							required
							id="outlined-required"
							label="Title"
							{...register("title")}
						/>
						<TextField
							required
							id="outlined-required"
							label="Body"
							{...register("body")}
						/>
						<Button variant="contained" type="submit">
							Add
						</Button>
					</Box>
				</Box>
				{todos.map((todo, index) => (
					<Todo key={index} todo={todo} removeTodo={removeTodo} />
				))}
			</Box>
		</>
	);
};

export default Todos;
