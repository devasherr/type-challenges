import type { DeepReadonly } from "./00009-medium-deep-readonly";

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        },
      ];
    };
  };
};

type Todo = DeepReadonly<X1>; // should be same as `Expected`
