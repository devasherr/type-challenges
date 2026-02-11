import type { AppendToObject } from "./00527-medium-append-to-object";

type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
