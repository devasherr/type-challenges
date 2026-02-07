import type { Trim } from "./00108-medium-trim";

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
