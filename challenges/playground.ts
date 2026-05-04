import type { MyReadonly } from "./00007-easy-readonly"

interface Todo {
    title: string,
    description: string
}

const todo: MyReadonly<Todo> = {
    title: "task title",
    description: "task description"
}
