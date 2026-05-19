import type { Replace } from "./00116-medium-replace";

type replaced = Replace<'types are fun!', 'are', 'awesome'> // expected to be 'types are awesome!'
