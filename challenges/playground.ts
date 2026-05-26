import type { Absolute } from "./00529-medium-absolute"

type Test = 0
type Result = Absolute<Test> // expected to be "100"
