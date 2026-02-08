import type { Replace } from "./00116-medium-replace";

type replaced = Replace<"foobarbar", "", "foo">; // expected to be 'types are awesome!'
