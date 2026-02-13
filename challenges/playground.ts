import type { Diff } from "./00645-medium-diff";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type T1 = Diff<Bar, Foo>; // { gender: number }>
type T2 = Diff<Foo, Coo>; // { age: string; gender: number }>
