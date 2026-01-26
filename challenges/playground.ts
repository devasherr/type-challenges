import type { Includes } from "./00898-easy-includes";

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type BoolTest = Includes<[true, 2, 3, 5, 6, 7], boolean>;
