import type { MyAwaited } from "./00189-easy-awaited"

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
type Res = MyAwaited<Promise<Promise<Promise<string>>>>
