import type { Flatten } from "./00459-medium-flatten";

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
