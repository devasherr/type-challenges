import type { MyExclude } from "./00043-easy-exclude";

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
