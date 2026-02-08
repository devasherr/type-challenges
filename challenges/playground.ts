import type { ReplaceAll } from "./00119-medium-replaceall";

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
type T = ReplaceAll<"foboorfoboar", "bo", "b">; // expected to be 'foborfobar'
