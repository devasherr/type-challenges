import type { TrimLeft } from "./00106-medium-trimleft";
import type { KebabCase } from "./00612-medium-kebabcase";

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";
