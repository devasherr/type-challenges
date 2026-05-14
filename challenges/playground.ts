import type { MyReturnType } from "./00002-medium-return-type"

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
