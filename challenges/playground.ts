import type { MyReadonly2 } from "./00008-medium-readonly-2";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type T = MyReadonly2<Todo, "title" | "description">;

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
