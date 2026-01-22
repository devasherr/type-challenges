interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type ShortTodo = Pick<Todo, "title" | "description">;
const todo: ShortTodo = {
  title: "hello",
  description: "long description",
};

const readOnlyTodo: Readonly<ShortTodo> = todo;
