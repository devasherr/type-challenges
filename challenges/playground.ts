import type { MyOmit } from "./00003-medium-omit"
import type { MyPick } from "./00004-easy-pick"

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}
