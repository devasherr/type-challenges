import type { TrimLeft } from "./00106-medium-trimleft";
import type { Trim } from "./00108-medium-trim";

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
