import type { MyAwaited } from "./00189-easy-awaited";

type ExampleType = Promise<Promise<Promise<string>>>;

type Result = MyAwaited<ExampleType>; // string
