import type { AppendArgument } from "./00191-medium-append-argument";

type Fn = (a: number, b: string) => number;
type Fn2 = () => void;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
