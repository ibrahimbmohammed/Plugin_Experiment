export type ExpandRecursively<T> = T extends Function
    ? T
    : T extends object
    ? T extends infer O
        ? { [K in keyof O]: ExpandRecursively<O[K]> }
        : never
    : NonNullable<T>;
