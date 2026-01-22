import { type TupleToObject } from "./00011-easy-tuple-to-object";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>;
