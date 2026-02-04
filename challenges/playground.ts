import type { Chainable } from "./00012-medium-chainable-options";

declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

const result3 = config.option("name", "another name").option("name", 123).get();
