import type { MyParameters } from "./03312-easy-parameters"

const foo = (arg1: string, arg2: number): void => { }

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
