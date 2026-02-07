import type { TrimLeft } from "./00106-medium-trimleft";

type trimmed = TrimLeft<"   \n\t foo bar ">; // expected to be 'Hello World  '
