import type { MyCapitalize } from "./00100-medium-capitalize";

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
