import type { Concat } from "./00533-easy-concat";

type Result = Concat<[1], [2]>; // expected to be [1, 2]
