import type { TupleToUnion } from "./00010-medium-tuple-to-union";

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
